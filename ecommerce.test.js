
import { Ecommerce } from './ecommerce.js';
import { userCredentials } from './dataFiles.js'
import { selectorsOfCredentials } from './ecommerceSelectors.js';


const { chromium } = require('playwright');
let browser;
let page;

beforeAll(async () => {
    browser = await chromium.launch({headless: false});
    // browserContext = await browser.newContext()
    // page = await browserContext.newPage()
  });

beforeEach(async () => {
    page = await browser.newPage();
    // let ecomm = new Ecommerce(page)
    // await ecomm.open()
});

// afterEach(async () => {
//   await browserContext.clearCookies()
// })

afterAll(async () => {
  await browser.close()
})



// const ems = [userCredentials.validData[0].email, userCredentials.validData[1].email]
// const pws = [userCredentials.validData[0].pass]
// ems.forEach(async (eml) => {  
// pws.forEach(async (pw) => {
  describe("Test suite", ()=>{ 
    it('Test with valid credentials', async () => {
          //jest.setTimeout(900000)
          let ecomm = new Ecommerce(page)
          await ecomm.open()
             
          //await ecomm.createAccount(userCredentials.validData[0], selectorsOfCredentials.createAccountSelectors[0])
          //await ecomm.logOut(selectorsOfCredentials.logOutSelector[0])
  
          //await ecomm.signIn({eml, pw}, selectorsOfCredentials.signInSelectors[0])
          
          await ecomm.signIn(userCredentials.validData[0], selectorsOfCredentials.signInSelectors[0])
          //await ecomm.logOut(selectorsOfCredentials.logOutSelector[0]) 
          await ecomm.search()
          await ecomm.addToCart(selectorsOfCredentials.addCart[0])
          await ecomm.proceedAndGetInvoice(selectorsOfCredentials.logOutSelector[0], selectorsOfCredentials.proceedEco[0])  
     });
  })

        // let testObj = [userCredentials.validData[1].email, userCredentials.validData[2].email]
        // testObj.forEach(async (i) => {}) 
        

        //await ecomm.createAccount(loginCredentials.invalidData[0])
        
       
//   });
// })
 







/*expects*/

// let title = await page.waitForSelector('p[class="alert alert-success"]', {timeout: 3000})
//         let expectedTitle = "Message successfully sent" // [class="alert alert-success"]
//         expect(await title.textContent()).toEqual(expectedTitle)
//         console.log(expectedTitle)

// let title = await page.waitForSelector("//div[@id='create_account_error']") // , {timeout: 5000}
//         let expectedTitle = 'An account using this email address has already been registered. Please enter a valid password or request a new one. '
//         expect(await title.textContent()).toEqual(expectedTitle)
//         if (expectedTitle) {
//             await ecomm.createAccount(`vahan.margaryan@betconstruct_5${+8}.com`)
//             await ecomm.createAccount_2('Vahan', 'Margaryan', '123456')
//             await ecomm.logOut()
//             await ecomm.signIn('vahan.margaryan@betconstruct_3.com', '123456')
//             await ecomm.search('Printed Chiffon Dress')
//             // await page.close();
// }