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

server.listen(5176, async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();

  const testViewports = [
    { name: 'Mobile 320px', width: 320, height: 600, capture: false },
    { name: 'Mobile 375px', width: 375, height: 600, capture: true, filename: 'header-mobile-375.png' },
    { name: 'Mobile 430px', width: 430, height: 600, capture: false },
    { name: 'Tablet 768px', width: 768, height: 600, capture: true, filename: 'header-tablet-768.png' },
    { name: 'Tablet 900px', width: 900, height: 600, capture: true, filename: 'header-tablet-900.png' },
    { name: 'Desktop 1024px', width: 1024, height: 600, capture: true, filename: 'header-desktop-1024.png' },
    { name: 'Desktop 1280px', width: 1280, height: 600, capture: true, filename: 'header-desktop-1280.png' },
    { name: 'Desktop 1440px', width: 1440, height: 600, capture: true, filename: 'header-desktop-1440.png' },
    { name: 'Desktop 1920px', width: 1920, height: 600, capture: false }
  ];

  console.log('Testing all breakpoints for header bar...');

  for (const vp of testViewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://127.0.0.1:5176', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 150));

    const check = await page.evaluate(() => {
      const header = document.querySelector('header');
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      return {
        headerHeight: header ? header.offsetHeight : 0,
        hasOverflow: scrollWidth > docWidth
      };
    });

    console.log(`[${vp.name}] Height: ${check.headerHeight}px | Overflow: ${check.hasOverflow ? 'FAILED' : 'PASSED'}`);

    if (vp.capture) {
      const headerEl = await page.$('header');
      if (headerEl) {
        await headerEl.screenshot({ path: path.join(screenshotsDir, vp.filename) });
        console.log(`Saved screenshot: ${vp.filename}`);
      }
    }
  }

  await browser.close();
  server.close();
  console.log('Header verification completed successfully!');
  process.exit(0);
});
