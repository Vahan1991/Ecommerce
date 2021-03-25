
import { Ecommerce } from './ecommerce.js';

const { chromium } = require('playwright');
let browser;
let page;

beforeAll(async () => {
    browser = await chromium.launch({
        headless: false
    });
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });


describe("Test suite", ()=>{
  it('It should work', async () => {
        //jest.setTimeout(20000)
        let ecco = new Ecommerce(page)
        await ecco.open()
        await ecco.createAccount(`vahan.margaryan@betconstruct_5${+11}.com`)
        await ecco.createAccount_2('Vahan', 'Margaryan', '123456')
        await ecco.logOut()
        await ecco.signIn('vahan.margaryan@betconstruct_3.com', '123456')
        await ecco.search('Printed Chiffon Dress')
    });
})


// let title = await page.waitForSelector("//div[@id='create_account_error']") // , {timeout: 5000}
//         let expectedTitle = 'An account using this email address has already been registered. Please enter a valid password or request a new one. '
//         expect(await title.textContent()).toEqual(expectedTitle)
//         if (expectedTitle) {
//             await ecco.createAccount(`vahan.margaryan@betconstruct_5${+8}.com`)
//             await ecco.createAccount_2('Vahan', 'Margaryan', '123456')
//             await ecco.logOut()
//             await ecco.signIn('vahan.margaryan@betconstruct_3.com', '123456')
//             await ecco.search('Printed Chiffon Dress')
//             // await page.close();
// }