const { chromium } = require('playwright');
let browser;
let page;

beforeAll(async () => {
    browser = await chromium.launch({headless: false});
  });


  beforeEach(async () => {
    page = await browser.newPage();
});

const Credentials = ['1', '2', '3']

Credentials.forEach(async (credential) => {
    it('It should work', async () => {
        
    })
})
