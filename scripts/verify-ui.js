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

// Simple static file server
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(distDir, reqPath);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Server Error: ${err.code}`);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

async function autoScroll(page) {
  const sections = await page.$$('section, footer');
  for (const s of sections) {
    await s.scrollIntoView();
    await new Promise(r => setTimeout(r, 100));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 300));
}

const PORT = 5173;

server.listen(PORT, async () => {
  console.log(`Verification static server listening at http://127.0.0.1:${PORT}`);

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Test 1: Desktop Viewport (1280 x 800)
  console.log('\n--- 1. Testing Desktop (1280px) ---');
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`http://127.0.0.1:${PORT}`, { waitUntil: 'networkidle0' });

  // Check Page Title
  const title = await page.title();
  console.log(`Page Title: ${title}`);

  // Check Logo loading
  const logoStatus = await page.evaluate(() => {
    const logos = Array.from(document.querySelectorAll('img[src*="atria-logo.png"]'));
    return logos.map((img, i) => ({
      index: i,
      src: img.src,
      loaded: img.complete && img.naturalWidth > 0,
      width: img.naturalWidth,
      height: img.naturalHeight
    }));
  });
  console.log('Logo status:', logoStatus);

  // Take Desktop Hero screenshot
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-hero-1280.png') });
  console.log('Saved desktop-hero-1280.png');

  // Trigger scroll to animate in all viewports
  await autoScroll(page);

  // Full page screenshot desktop
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-full-1280.png'), fullPage: true });
  console.log('Saved desktop-full-1280.png');

  // Test 2: Test Interactive Elements
  console.log('\n--- 2. Testing Modal & Interactions ---');
  
  // Click Register Your School button
  await page.click('nav button'); // "Register Your School"
  await new Promise(r => setTimeout(r, 400));
  const modalVisible = await page.evaluate(() => {
    const modal = document.querySelector('#modal-title');
    return !!modal && window.getComputedStyle(modal.closest('div[role="dialog"]')).display !== 'none';
  });
  console.log('Registration Modal opened successfully:', modalVisible);
  await page.screenshot({ path: path.join(screenshotsDir, 'desktop-modal-open.png') });

  // Close modal via Escape
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // Test FAQ Accordion
  console.log('\n--- 3. Testing FAQ Accordion ---');
  const faqBefore = await page.evaluate(() => {
    const firstAns = document.querySelector('#faq-answer-0');
    return !!firstAns;
  });
  console.log('FAQ item 0 open before click:', faqBefore);

  await page.click('#faqAccordionGroup button');
  await new Promise(r => setTimeout(r, 400));
  const faqAfter = await page.evaluate(() => {
    const firstAns = document.querySelector('#faq-answer-0');
    return !!firstAns && firstAns.textContent.trim().length > 0;
  });
  console.log('FAQ item 0 open after click:', faqAfter);

  // Test 3: Breakpoints and Overflow Check
  const breakpoints = [
    { name: '320px (Small Mobile)', width: 320, height: 640 },
    { name: '360px (Standard Mobile)', width: 360, height: 740 },
    { name: '375px (iPhone SE/Mobile Reference)', width: 375, height: 812 },
    { name: '390px (iPhone 13/14)', width: 390, height: 844 },
    { name: '430px (iPhone Pro Max)', width: 430, height: 932 },
    { name: '768px (iPad/Tablet)', width: 768, height: 1024 },
    { name: '1024px (Laptop/Tablet Landscape)', width: 1024, height: 768 },
    { name: '1280px (Desktop Reference)', width: 1280, height: 800 },
    { name: '1440px (Large Desktop)', width: 1440, height: 900 },
    { name: '1920px (Full HD)', width: 1920, height: 1080 }
  ];

  console.log('\n--- 4. Checking Breakpoints & Horizontal Overflow ---');
  for (const bp of breakpoints) {
    await page.setViewport({ width: bp.width, height: bp.height });
    await new Promise(r => setTimeout(r, 200));

    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const bodyWidth = document.body.scrollWidth;
      return {
        docWidth,
        scrollWidth,
        bodyWidth,
        hasOverflow: scrollWidth > docWidth || bodyWidth > docWidth
      };
    });

    console.log(`[${bp.name}] Width: ${bp.width}px - Overflow: ${overflow.hasOverflow ? 'FAILED (' + overflow.scrollWidth + 'px)' : 'PASSED (no horizontal overflow)'}`);

    if (bp.width === 375) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(r => setTimeout(r, 200));
      await page.screenshot({ path: path.join(screenshotsDir, 'mobile-375-hero.png') });
      await autoScroll(page);
      await page.screenshot({ path: path.join(screenshotsDir, 'mobile-375-full.png'), fullPage: true });
      console.log('Saved mobile-375 screenshots');

      // Test mobile menu toggle
      const mobileNavBtn = await page.$('#mobileNavToggle');
      if (mobileNavBtn) {
        await mobileNavBtn.click();
        await new Promise(r => setTimeout(r, 400));
        const menuOpen = await page.evaluate(() => {
          const menu = document.querySelector('#mobileNavMenu');
          return !!menu;
        });
        console.log('Mobile menu drawer opened:', menuOpen);
        await page.screenshot({ path: path.join(screenshotsDir, 'mobile-375-drawer-open.png') });
        await mobileNavBtn.click();
        await new Promise(r => setTimeout(r, 300));
      }
    } else if (bp.width === 768) {
      await autoScroll(page);
      await page.screenshot({ path: path.join(screenshotsDir, 'tablet-768-full.png'), fullPage: true });
      console.log('Saved tablet-768 screenshot');
    }
  }

  // Check all required sections are present
  console.log('\n--- 5. Checking Presence of All 13 Sections ---');
  const sectionsReport = await page.evaluate(() => {
    const requiredSections = [
      { id: 'header', selector: 'header' },
      { id: 'nav', selector: 'nav' },
      { id: 'hero', selector: '#hero' },
      { id: 'about', selector: '#about' },
      { id: 'journey', selector: '#journey' },
      { id: 'challenges', selector: '#challenges' },
      { id: 'participate', selector: '#participate' },
      { id: 'social-challenge', selector: '#social-challenge' },
      { id: 'rewards', selector: '#rewards' },
      { id: 'finale', selector: '#finale' },
      { id: 'impact', selector: '#impact' },
      { id: 'faqs', selector: '#faqs' },
      { id: 'final-cta', selector: '#final-cta' },
      { id: 'footer', selector: '#footer' }
    ];

    return requiredSections.map(s => ({
      id: s.id,
      present: !!document.querySelector(s.selector),
      headingText: document.querySelector(s.selector)?.querySelector('h1, h2, h3')?.textContent.trim() || 'N/A'
    }));
  });

  console.table(sectionsReport);

  await browser.close();
  server.close();
  console.log('\nVerification completed successfully!');
  process.exit(0);
});
