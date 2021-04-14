  const { chromium } = require('playwright');
  let browser;
  let page;
  
  beforeAll(async () => {
      browser = await chromium.launch({headless: true});
    });
  
  
    beforeAll(async () => {
      page = await browser.newPage();
  });
  
  
  afterAll(async () => {
        await browser.close()
  })
    
  
  
  
 

describe("Test suite", ()=>{ 
    it('Test with valid credentials', async () => {
        await page.goto("http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Printed+Summer+Dress&submit_search=");  // https://ultimateqa.com/dummy-automation-websites/ 
        // await page.click("//div[@class='header_user_info']");
        // await page.fill("//input[@id='email']", 'vahan.margaryan@betconstructTest10.com')
        // await page.fill("//input[@id='passwd']", '12345600')
        // await page.fill("//input[@id='search_query_top']", 'Printed Chiffon Dress')    
        // await page.click("//button[@name='submit_search']")       

        // let title = await page.waitForSelector("(//div[@class='product-container']/..)[2]", {timeout: 5000})
        // let expectedTitle = '$30.50'
        // expect(await title.textContent()).toContain(expectedTitle)
        // console.log(expectedTitle + 'Done')
        let elem = await page.waitForSelector("(//span[@itemprop='price'])[4]") // $$
        let text = '$30.50'
        expect(await elem.textContent()).toContain(`${text}`)  // `${text.repeat(2)}`
        console.log(await elem.textContent())
        
        // console.dir(await page.$$eval("li", li=>li.innerHTML))  // const divCounts = await page.$$eval('div', (divs, min) => divs.length >= min, 10);
     });
  })


