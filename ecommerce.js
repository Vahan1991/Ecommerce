import {baseURL} from "./baseConfigs"

export class Ecommerce {
    constructor(page, browser) {
        this.page = page
        // this.browser = browser ???
        
    }

    async open() {
        await this.page.goto(baseURL)
    }
    
    
   /* async createAccount(Data, Selector1) {
        await this.page.click(Selector1.signInButton)                                 // "//div[@class='header_user_info']"
        await this.page.fill(Selector1.createEmailInput, Data.email)                 // "//input[@id='email_create']"
        await this.page.click(Selector1.submitButton)                               // "//button[@id='SubmitCreate']"
        await this.page.check(Selector1.radioGenderButtons)                        // "//label[@for='id_gender1']"
        await this.page.fill(Selector1.firstNameInput, Data.firstName)            // "//input[@id='customer_firstname']"
        await this.page.fill(Selector1.lastNameInput, Data.lastName)             // "//input[@id='customer_lastname']"
        await this.page.fill(Selector1.passInput, Data.pass)                    // "//input[@type='password']" 

        await this.page.selectOption(Selector1.dayDropDown, Data.days)         // "//select[@id='days']"
        await this.page.selectOption(Selector1.monthsDropDown, Data.months)   // "//select[@id='months']"
        await this.page.selectOption(Selector1.yearsDropDown, Data.years)    // "//select[@id='years']"

        await this.page.click(Selector1.newsletterCheckbox)                            // "//div[@id='uniform-newsletter']"
        await this.page.fill(Selector1.firstNameInput_2, Data.firstName)              // "//input[@id='firstname']"
        await this.page.fill(Selector1.lastNameInput_2, Data.lastName)               // "//input[@id='lastname']"
        await this.page.fill(Selector1.companyName, Data.company)                   // "//input[@id='company']"
        await this.page.fill(Selector1.address1, Data.address1)                    // "//input[@name='address1']"
        await this.page.fill(Selector1.cityName, Data.city)                       // '//input[@name="city"]'
        await this.page.selectOption(Selector1.stateName, Data.state)            // "//select[@name='id_state']"
        await this.page.fill(Selector1.postCode, Data.postcode)                 // '//input[@id="postcode"]'
        await this.page.fill(Selector1.otherSelector, Data.other)              // "//textarea[@id='other']"
        await this.page.fill(Selector1.phoneMobile, Data.mobileNum)           // "//input[@name='phone_mobile']"
        await this.page.click(Selector1.submitAccount)                      // "//button[@id='submitAccount']"
    }
    async logOut(Selector2) {
        await this.page.click(Selector2.logOut)                            // "//a[@class='logout']"
    } */
    async signIn(Data, Selector3) {
        await this.page.click("//div[@class='header_user_info']")
        await this.page.fill(Selector3.signInEmail, Data.email)           // "//input[@id='email']"
        await this.page.fill(Selector3.signInPass, Data.pass)            // "//input[@id='passwd']" 
        await this.page.click(Selector3.logInSubmit)   
    }
    async search() {
        await this.page.fill("//input[@id='search_query_top']", 'Printed Chiffon Dress')      // "//input[@id='search_query_top']"
        await this.page.click("//button[@name='submit_search']")                             // "//button[@name='submit_search']"
    }

    async addToCart() {
        // const myPromise = new Promise((resolve) => {
        //     setTimeout(async () => {
        //        resolve(await this.page.hover("[alt='Printed Summer Dress'][title='Printed Summer Dress']"));
        //        await this.page.hover("//img[@alt='Printed Summer Dress']")
        //     }, 2000);
        //   });
        // myPromise
        // .then(await this.page.click("xpath=(//a[@title='Add to cart'])[2]"))
        
        await this.page.hover("(//div[@class='product-container']/..)[2]")
        await this.page.click("xpath=(//a[@title='Add to cart'])[2]")
    }
    

    async proceedAndGetInvoice(Selector2){
        // CSS_Selectors
        await this.page.click('[title="Proceed to checkout"]');                                  
        await this.page.click("p [title='Proceed to checkout']");            
        await this.page.click('p > [name="processAddress"]');   
        await this.page.click("p > div > span > input[type='checkbox']");
        await this.page.click('p > [name="processCarrier"]');                   
        await this.page.click("div p a.cheque");                            
        await this.page.click("form p > [type='submit'] span");
        await this.page.click('[title="Back to orders"]');
        await this.page.click('td [class="btn btn-default button button-small"]');
        await this.page.selectOption('[name="id_product"]', '6');
        await this.page.fill('p textarea[class="form-control"]', 'Some text here.');
        await this.page.click('button[name="submitMessage"]');
        await this.page.click(Selector2.logOut)
    }
}





