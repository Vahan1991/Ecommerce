
export class Ecommerce {
    constructor(page){
        this.page = page 
    }

    async open(){
        await this.page.goto('http://automationpractice.com/index.php?')
    }
    async createAccount(email){
        await this.page.click("//div[@class='header_user_info']")
        await this.page.fill("//input[@id='email_create']", email)
        await this.page.click("//button[@id='SubmitCreate']")
    }
    async createAccount_2(firstName, lastName, Password){
        await this.page.check("//label[@for='id_gender1']")
        await this.page.fill("//input[@id='customer_firstname']", firstName)
        await this.page.fill("//input[@id='customer_lastname']", lastName)
        await this.page.fill("//input[@type='password']", Password)
        await this.page.selectOption("//select[@id='days']", '1')
        await this.page.selectOption("//select[@id='months']", '1')
        await this.page.selectOption("//select[@id='years']", '2021')
        await this.page.click("//div[@id='uniform-newsletter']")
        await this.page.fill("//input[@id='firstname']", 'VahMarg')
        await this.page.fill("//input[@id='lastname']", 'MargVah')
        await this.page.fill("//input[@id='company']", 'Ucraft')
        await this.page.fill("//input[@name='address1']", 'address 123')
        await this.page.fill('//input[@name="city"]', 'Yerevan')
        await this.page.selectOption("//select[@name='id_state']", '1')
        await this.page.fill('//input[@id="postcode"]', '00026')
        await this.page.fill("//textarea[@id='other']", 'Hello World !')
        await this.page.fill("//input[@name='phone_mobile']", '+37496122261')
        await this.page.click("//button[@id='submitAccount']")
    }
    async logOut(){
        await this.page.click("//a[@class='logout']")
    }
    async signIn(emailInput, passworInput){
        await this.page.fill("//input[@id='email']", emailInput)
        await this.page.fill("//input[@id='passwd']", passworInput)
        await this.page.click("//button[@id='SubmitLogin']")
    }
    async search(query){
        await this.page.fill("//input[@id='search_query_top']", query)
        await this.page.click("//button[@name='submit_search']")
    }

}


        // await ecco.signIn()
        // await ecco.search()