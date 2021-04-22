import { userCredentials } from './dataFiles'

export let Util = {
    generateRandomEmails: function() {
        let randomNumEmail = Math.floor(Math.random() * 100)
        return `name${randomNumEmail.toString()}${userCredentials.validData[0].email}`  // '@email.com'
},
    generateRandomPass: function(){
        let randomUser = Math.floor(Math.random() * 100)
        return `Pw${randomUser.toString()}${userCredentials.validData[0].pass}!`
    }
}





// console.log(Utils.username())
// console.log(Util.generateRandomEmails())
// Util.generateRandomEmails()