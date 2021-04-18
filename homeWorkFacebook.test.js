class facebook_HTML_Page{
    constructor(page){
        this.page = page
    }
    async open(){
        await this.page.goto("C:/Users/vahan.margaryan/JS-Auto/Ecommerce/homeWorkFacebook.html")
    }
    async fillEmail(em){
      await this.page.fill("//input[@id='email']/.", em.email, {timeout: 5000})
    } 
    async fillPass(pw){
      await this.page.fill("//input[@id='pass']/.", pw.pass, {timeout: 5000})
    }
    async clickLogIn(){
        await this.page.click("//button[@id='u_0_d_Fe']/../button")

        let err = await this.page.waitForSelector("//p[text()='It may have been moved, edited, or deleted.']", {timeout: 3000}) // $$
        let text = 'It may have been moved, edited, or deleted.' 
        expect(await err.textContent()).toContain(`${text}`)  // `${text.repeat(2)}`
        console.log(await err.textContent())
    }

}
import { userCredentials } from './dataFiles'

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
//     await browser.close()
// })
  


describe("Facebook test suite", ()=>{ 
    it('It should work', async () => {
        let facebook = new facebook_HTML_Page(page)
        await facebook.open()
        await facebook.fillEmail(userCredentials.validData[0])
        await facebook.fillPass(userCredentials.validData[0])
        await facebook.clickLogIn()
    })
})  
  
