const playwright = require('playwright');
const { chromium } = require('playwright');
let browser
let page

beforeAll(async () => {
    browser = await chromium.launch({headless: false});
});

beforeAll(async () => {
    page = await browser.newPage();
});


let credentials = {
    url: "https://www.google.com/",
    cars: 'Ferrari',
    clickBtnSelector: "(//input[@name='btnK'])[2]"

}

describe("Google test suite", () =>{ 
    it('It should work', async () => {

    async function searchGoogle() {
        await page.goto(credentials.url)

    async function writeQuery() {
        await page.fill("input[name=q]", credentials.cars)   
    }
    async function clickBtn() {
        await page.click(credentials.clickBtnSelector)
    }

    writeQuery()
    clickBtn()
  }
    searchGoogle()
    console.log('Done')

})  
})

// let googleSearching = {
//     url: 'https://www.google.com/',
//     firstQuery: 'ferrari',

//     sayDo: function() {
//         return this.url, this.firstQuery
//     }
// };

// googleSearching.googleLink = async function() {
//     await page.goto(this.url)
// }
// googleSearching.googleSearch = async function(){
//     await page.fill("input[name=q]", this.firstQuery) 
    
// } 



