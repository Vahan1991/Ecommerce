let usernames = ["Marg, Vah"]
let Utils = { 
    email: function(){
        let randomNum = Math.floor(Math.random() * 100)
        return `name${randomNum.toString()}@email.com`
    },
    username: function(){
        let randomUser = Math.floor(Math.random() * 100)
        return `name${randomUser.toString()}, ${usernames}`
    }
}


console.log(Utils.username())
console.log(Utils.email())