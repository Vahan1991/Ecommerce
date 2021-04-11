class userCreds{
  constructor(page){
      this.page = page
  }
  async open(){
      await this.page.goto("http://automationpractice.com/index.php?controller=authentication&back=my-account")
  }
  async fillEmail(em){
    await this.page.fill("//input[@id='email']", em.credential, {timeout: 5000})
  } 
  async fillPass(pw){
    await this.page.fill("//input[@id='passwd']", pw.credential2)
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
  



const emails = ['email_1.com', 'email_2.com', 'email_3.com']
const passwords = ['123456', '123456', '122222']

emails.forEach(async (credential) => {
passwords.forEach(async (credential2) => {
  it('It should work', async () => {
    let google = new userCreds(page)
    await google.open()
    await google.fillEmail({credential})
    await google.fillPass({credential2})
  })
})
    
    // console.log(credential)
})
