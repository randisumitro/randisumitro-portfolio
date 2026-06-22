import { chromium, devices } from 'playwright';
import path from 'path';
import fs from 'fs';

const TARGETS = [
  { id: 'mpp-pematangsiantar', url: 'https://mpp.pematangsiantar.go.id/' }
];

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'projects');

async function captureScreenshots() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });

  for (const target of TARGETS) {
    console.log(`\n📸 Capturing ${target.id}...`);

    // --- DESKTOP ---
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const desktopPage = await desktopContext.newPage();
    try {
      console.log(`   Navigating to ${target.url} (Desktop)`);
      await desktopPage.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Wait for animations
      await desktopPage.waitForTimeout(3000);
      
      // Capture Desktop Home
      await desktopPage.screenshot({ 
        path: path.join(OUTPUT_DIR, `${target.id}-desktop.png`), 
        fullPage: false 
      });
      console.log(`   ✅ Saved Desktop Home`);

      // Attempt to find and click a "Layanan" or "Service" link for a gallery shot
      const layananLink = await desktopPage.$('text=/layanan|service|informasi/i');
      if (layananLink) {
        console.log(`   Navigating to internal link for Gallery...`);
        try {
          await layananLink.click({ timeout: 5000 });
          await desktopPage.waitForTimeout(3000);
          await desktopPage.screenshot({ 
            path: path.join(OUTPUT_DIR, `${target.id}-desktop-gallery-1.png`), 
            fullPage: false 
          });
          console.log(`   ✅ Saved Desktop Gallery 1`);
        } catch (e) {
          console.log(`   ⚠️ Failed to capture gallery link: ${e.message}`);
        }
      } else {
        // Just scroll down a bit for the gallery
        await desktopPage.evaluate(() => window.scrollBy(0, 900));
        await desktopPage.waitForTimeout(1000);
        await desktopPage.screenshot({ 
          path: path.join(OUTPUT_DIR, `${target.id}-desktop-gallery-1.png`), 
          fullPage: false 
        });
        console.log(`   ✅ Saved Desktop Gallery 1 (Scrolled)`);
      }

    } catch (e) {
      console.error(`   ❌ Failed Desktop ${target.id}: ${e.message}`);
    }
    await desktopContext.close();

    // --- MOBILE ---
    const mobileContext = await browser.newContext({
      ...devices['iPhone 13 Pro'],
      deviceScaleFactor: 3,
    });
    const mobilePage = await mobileContext.newPage();
    try {
      console.log(`   Navigating to ${target.url} (Mobile)`);
      await mobilePage.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await mobilePage.waitForTimeout(3000);
      
      await mobilePage.screenshot({ 
        path: path.join(OUTPUT_DIR, `${target.id}-mobile.png`), 
        fullPage: false 
      });
      console.log(`   ✅ Saved Mobile Home`);

      // Scroll for gallery
      await mobilePage.evaluate(() => window.scrollBy(0, 800));
      await mobilePage.waitForTimeout(1000);
      await mobilePage.screenshot({ 
        path: path.join(OUTPUT_DIR, `${target.id}-mobile-gallery-1.png`), 
        fullPage: false 
      });
      console.log(`   ✅ Saved Mobile Gallery 1`);

    } catch (e) {
      console.error(`   ❌ Failed Mobile ${target.id}: ${e.message}`);
    }
    await mobileContext.close();
  }

  await browser.close();
  console.log('\n🎉 All screenshots captured successfully!');
}

captureScreenshots().catch(console.error);
