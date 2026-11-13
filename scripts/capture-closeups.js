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

server.listen(5174, async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://127.0.0.1:5174', { waitUntil: 'networkidle0' });

  // Scroll to impact
  const impactEl = await page.$('#impact');
  if (impactEl) {
    await impactEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await impactEl.screenshot({ path: path.join(screenshotsDir, 'impact-closeup.png') });
    console.log('Saved impact-closeup.png');
  }

  // Scroll to footer
  const footerEl = await page.$('#footer');
  if (footerEl) {
    await footerEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await footerEl.screenshot({ path: path.join(screenshotsDir, 'footer-closeup.png') });
    console.log('Saved footer-closeup.png');
  }

  // Also capture mobile footer at 375px
  await page.setViewport({ width: 375, height: 800 });
  await page.goto('http://127.0.0.1:5174', { waitUntil: 'networkidle0' });
  const footerMobileEl = await page.$('#footer');
  if (footerMobileEl) {
    await footerMobileEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 400));
    await footerMobileEl.screenshot({ path: path.join(screenshotsDir, 'footer-closeup-mobile.png') });
    console.log('Saved footer-closeup-mobile.png');
  }

  await browser.close();
  server.close();
  process.exit(0);
});
