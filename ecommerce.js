import {baseURL} from "./baseConfigs"

export class Ecommerce {
    constructor(page, browser) {
        this.page = page
        // this.browser = browser ???
        
    }

    async open() {
        await this.page.goto(baseURL)
    }
    
    
    async createAccount(Data, Selector1) {
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
    }
    async signIn(Data, Selector3) {
        await this.page.fill(Selector3.signInEmail, Data.email)           // "//input[@id='email']"
        await this.page.fill(Selector3.signInPass, Data.pass)            // "//input[@id='passwd']" 
        await this.page.click(Selector3.logInSubmit)                    // "//button[@id='SubmitLogin']"
    }
    // async search(Selector, Srch) {
    //     await this.page.fill(Selector.searchQuery, Srch.query)      // "//input[@id='search_query_top']"
    //     await this.page.click(Selector.searchSubmit)                 // "//button[@name='submit_search']"
    // }

}





