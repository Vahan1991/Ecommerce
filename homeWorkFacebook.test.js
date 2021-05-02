class facebook_HTML_Page{
    constructor(page){
        this.page = page
    }
    async open(){
        await this.page.goto("C:/Users/vahan.margaryan/JS-Auto/Ecommerce/homeWorkFacebook.html")
    }
    async fillEmail(em){
      await this.page.fill("//input[@id='email']/.", em)
    } 
    async fillPass(pw){
      await this.page.fill("//input[@id='pass']/.", pw)
    }
    async clickLogIn(){
         // Click create new account by a (CSS Selector)
        // await this.page.click("[type~=hidden] ~ input ~ div._6ltg a") 
        
        
        await this.page.click("//button[@id='u_0_d_Fe']/../button")

        let err = await this.page.waitForSelector("//p[text()='It may have been moved, edited, or deleted.']", {timeout: 3000}) // $$
        let text = 'It may have been moved, edited, or deleted.' 
        expect(await err.textContent()).toContain(`${text}`)  // `${text.repeat(2)}`
        console.log(await err.textContent())

        if (await err.textContent()) {
            await this.page.goBack('Back', {timeout: 3000}) 
        }
        await this.page.evaluate(() => window.alert('Message'))    
    }
}


import { Util } from './Utils'

const { chromium } = require('playwright');
let browser;
let page;

beforeAll(async () => {
    browser = await chromium.launch({headless: false});
});


beforeAll(async () => {
    page = await browser.newPage();
});


// afterAll(async () => {
//     // await browser.close()
// })
  


describe("Facebook test suite", ()=>{ 
    it('It should work', async () => {
        let facebook = new facebook_HTML_Page(page)
        await facebook.open() 
        await facebook.fillEmail(Util.generateRandomEmails())
        await facebook.fillPass(Util.generateRandomPass())  
        await facebook.clickLogIn()
    })  
})  
  



// await page.keyboard.down('Control');
// await page.keyboard.press('V');
// await page.keyboard.up('Control');