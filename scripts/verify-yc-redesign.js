import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const screenshotsDir = path.join(projectRoot, 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(distDir, reqPath);
  if (!fs.existsSync(filePath)) filePath = path.join(distDir, 'index.html');
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(5177, async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    const viewports = [
      { name: 'desktop-1280', width: 1280, height: 900 },
      { name: 'tablet-768', width: 768, height: 1024 },
      { name: 'mobile-375', width: 375, height: 812 }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto('http://127.0.0.1:5177', { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 300));

      // Capture hero
      await page.screenshot({ path: path.join(screenshotsDir, `yc-hero-${vp.name}.png`) });
      console.log(`Captured yc-hero-${vp.name}.png`);

      // Scroll and trigger animations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 300;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 40);
        });
      });

      await new Promise(r => setTimeout(r, 400));
      await page.screenshot({
        path: path.join(screenshotsDir, `yc-fullpage-${vp.name}.png`),
        fullPage: true
      });
      console.log(`Captured yc-fullpage-${vp.name}.png`);
    }

    await browser.close();
    server.close();
    console.log('Verification completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Verification error:', err);
    server.close();
    process.exit(1);
  }
});
