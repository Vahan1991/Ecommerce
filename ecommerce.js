import {baseURL} from './baseConfigs'
import {invalidData, validData, dates, validData_2, searching} from './dataFiles'
 
export class Ecommerce {
    constructor(page){
        this.page = page 
    }

    async open(){
        await this.page.goto(baseURL)
    }

    async createAccount(){
        await this.page.click("//div[@class='header_user_info']")
        await this.page.fill("//input[@id='email_create']", validData.email)
        await this.page.click("//button[@id='SubmitCreate']")
        await this.page.check("//label[@for='id_gender1']")
        await this.page.fill("//input[@id='customer_firstname']", validData.firstName)
        await this.page.fill("//input[@id='customer_lastname']", validData.lastName)
        await this.page.fill("//input[@type='password']", validData.pas)
        await this.page.selectOption("//select[@id='days']", dates.days)
        await this.page.selectOption("//select[@id='months']", dates.months)
        await this.page.selectOption("//select[@id='years']", dates.years)
        await this.page.click("//div[@id='uniform-newsletter']")
        await this.page.fill("//input[@id='firstname']", validData_2.firstName2)
        await this.page.fill("//input[@id='lastname']", validData_2.lastName2)
        await this.page.fill("//input[@id='company']", validData_2.company)
        await this.page.fill("//input[@name='address1']", validData_2.address1)
        await this.page.fill('//input[@name="city"]', validData_2.city)
        await this.page.selectOption("//select[@name='id_state']", validData_2.state)
        await this.page.fill('//input[@id="postcode"]', validData_2.postcode)
        await this.page.fill("//textarea[@id='other']", validData_2.other)
        await this.page.fill("//input[@name='phone_mobile']", validData_2.mobileNum)
        await this.page.click("//button[@id='submitAccount']")
    }
    async logOut(){
        await this.page.click("//a[@class='logout']")
    }
    async signIn(){
        await this.page.fill("//input[@id='email']", validData.email)
        await this.page.fill("//input[@id='passwd']", validData.pas)
        await this.page.click("//button[@id='SubmitLogin']")
    }
    async search(){
        await this.page.fill("//input[@id='search_query_top']", searching.query)
        await this.page.click("//button[@name='submit_search']")
    }

}