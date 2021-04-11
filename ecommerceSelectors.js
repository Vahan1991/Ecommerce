export const selectorsOfCredentials = {
    createAccountSelectors: [
        {
            signInButton: "//div[@class='header_user_info']",
            createEmailInput: "//input[@id='email_create']",
            submitButton: "//button[@id='SubmitCreate']",
            radioGenderButtons: "//label[@for='id_gender1']",
            firstNameInput: "//input[@id='customer_firstname']",
            lastNameInput: "//input[@id='customer_lastname']",
            passInput: "//input[@type='password']",
            dayDropDown: "//select[@id='days']",
            monthsDropDown: "//select[@id='months']", 
            yearsDropDown: "//select[@id='years']",
            newsletterCheckbox: "//div[@id='uniform-newsletter']",
            firstNameInput_2: "//input[@id='firstname']",
            lastNameInput_2: "//input[@id='lastname']",
            companyName: "//input[@id='company']",
            address1: "//input[@name='address1']",
            cityName: '//input[@name="city"]',
            stateName: "//select[@name='id_state']",
            postCode: '//input[@id="postcode"]',
            otherSelector: "//textarea[@id='other']",
            phoneMobile: "//input[@name='phone_mobile']",
            submitAccount: "//button[@id='submitAccount']"

        }
    ],
    logOutSelector: [
    {
        logOut: "//a[@class='logout']"
    }

    ],
    signInSelectors: [
        {
        signInEmail: "//input[@id='email']",
        signInPass: "//input[@id='passwd']",
        logInSubmit: "//button[@id='SubmitLogin']"
    }
   ],    
}


// console.log(searchSelectors.searchingSel[0])
// console.log(selectorsOfCredentials.createAccountSelectors[0])