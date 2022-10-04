

let user = {}

user.name = 'john'
user.surName = 'smith'
user.name = 'Pete'
delete user.name


function isEmpty(obj){
    for (let key in obj){
        return false
    } 
    return true
}

console.log(user)
console.log(isEmpty(user))