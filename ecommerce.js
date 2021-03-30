import {baseURL} from "./baseConfigs"

export class Ecommerce {
    constructor(page) {
        this.page = page
    }

    async open() {
        await this.page.goto(baseURL)
    }

    async createAccount(Data) {
        await this.page.click("//div[@class='header_user_info']")
        await this.page.fill("//input[@id='email_create']", Data.email)
        await this.page.click("//button[@id='SubmitCreate']")
        await this.page.check("//label[@for='id_gender1']")
        await this.page.fill("//input[@id='customer_firstname']", Data.firstName)
        await this.page.fill("//input[@id='customer_lastname']", Data.lastName)
        await this.page.fill("//input[@type='password']", Data.pass)

        await this.page.selectOption("//select[@id='days']", Data.days)
        await this.page.selectOption("//select[@id='months']", Data.months)
        await this.page.selectOption("//select[@id='years']", Data.years)

        await this.page.click("//div[@id='uniform-newsletter']")
        await this.page.fill("//input[@id='firstname']", Data.firstName)
        await this.page.fill("//input[@id='lastname']", Data.lastName)
        await this.page.fill("//input[@id='company']", Data.company)
        await this.page.fill("//input[@name='address1']", Data.address1)
        await this.page.fill('//input[@name="city"]', Data.city)
        await this.page.selectOption("//select[@name='id_state']", Data.state)
        await this.page.fill('//input[@id="postcode"]', Data.postcode)
        await this.page.fill("//textarea[@id='other']", Data.other)
        await this.page.fill("//input[@name='phone_mobile']", Data.mobileNum)
        await this.page.click("//button[@id='submitAccount']")
    }
    async logOut() {
        await this.page.click("//a[@class='logout']")
    }
    async signIn() {
        await this.page.fill("//input[@id='email']", validData.email)
        await this.page.fill("//input[@id='passwd']", validData.pas)
        await this.page.click("//button[@id='SubmitLogin']")
    }
    async search() {
        await this.page.fill("//input[@id='search_query_top']", searching.query)
        await this.page.click("//button[@name='submit_search']")
    }

}





