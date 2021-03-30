
import { Ecommerce } from './ecommerce.js';
import {loginCredentials, dates} from './dataFiles'


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

  afterAll(async () => {
    await browser.close()
  })

describe("Test suite", ()=>{
  it('Test with valid credentials', async () => {
        let ecco = new Ecommerce(page)
        await ecco.open()
        //await ecco.createAccount(invalidData)
        await ecco.createAccount(loginCredentials.validData[0])
        await ecco.logOut()
        await ecco.signIn(validData.email, validData.pas)
        await ecco.search(searching.query)
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