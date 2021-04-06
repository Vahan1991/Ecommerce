// https://www.w3schools.com/cssref/css_selectors.asp vs http://automationpractice.com/

class CSSSELECTORS{
    constructor(page){
        this.page = page
}
    async open(){
        await this.page.goto("http://automationpractice.com/")
    }

    async checkingOutCSS(css){
        await this.page.waitForSelector(css.cssSelector_1)
        await this.page.waitForSelector(css.cssSelector_2)
        //await this.page.waitForSelector(css.cssSelector_3)
        await this.page.waitForSelector(css.cssSelector_4)
        await this.page.waitForSelector(css.cssSelector_5)
        await this.page.waitForSelector(css.cssSelector_6, {timeout: 5000})
        //await this.page.waitForSelector(css.cssSelector_7)
        //await this.page.waitForSelector(css.cssSelector_8) 
        await this.page.waitForSelector(css.cssSelector_9)
        //await this.page.waitForSelector(css.cssSelector_10)
        console.log('Done')
   }
}
  const { chromium } = require('playwright');
  let browser;
  let page;
  
  beforeAll(async () => {
      browser = await chromium.launch({headless: false});
    });
  
  
    beforeAll(async () => {
      page = await browser.newPage();
  });

  afterAll(async () => {
      await browser.close()
})



const someCSSselectors = {
    cssSelectors: [
        {
        cssSelector_1: 'input[class="search_query form-control ac_input"]',
        cssSelector_2: '.header-container',
        //cssSelector_3: "input[type='hidden'].hidden",
        cssSelector_4: 'img.img-responsive, img.logo',
        cssSelector_5: '#center_column, .center_column col-xs-12 col-sm-12',
        cssSelector_6: 'p.submit', 
        //cssSelector_7: 'div > p > a#button_order_cart',
        //cssSelector_8: 'p ~ p > a',        // Selects every <p> element that is preceded by a <p> element & Selects all <a> elements where the parent is a <p> element
        cssSelector_9: 'div div header div.banner',
        cssSelector_10: 'div div > p, .cart-prices, a[href*="youtube"]'
    }
  ]
}

someCSSselectors.cssSelectors.forEach(async (cssElement) => {
    it('It should work', async () => {
       let automationpractice = new CSSSELECTORS(page)
       await page.goto("http://automationpractice.com/")
       await automationpractice.open()
       try {
        await automationpractice.checkingOutCSS(cssElement)
        } catch (e) {
            console.log(e + ' Error')
        }
    })  
});


