export const loginCredentials = { 
 validData : [
    {
        firstName: "Vahan", 
        lastName: "Margaryan", 
        pass: '12345600',
        email: "vahan.margaryan@betconstruct_5.com",
        company: 'Ucraft',
        address1: 'address 123',
        city: 'Yerevan',
        state: '1',
        postcode: '00026',
        other: 'Hello World !',
        mobileNum: '+37496122261',
        days: '1',
        months: '1',
        years: '2021'
    },
 ],

 invalidData : [
    {
        firstName: "Vahan@@@", 
        lastName: "Margaryan#dsa", 
        pass: '12345600',
        email: `123@@@vahan.margaryan@betconstruct_455.com`,
        days: '1',
        months: '1',
        years: '2021'
    },
 ]
};



export const searching = {
    query: 'Printed Chiffon Dress'
}