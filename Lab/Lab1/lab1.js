const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  console.log('Hello World');
  await browser.close();
})();
