

let user = {}

user.name = 'john'
user.surName = 'smith'
user.name = 'Pete'
delete user.name

// Check for emptiness

function isEmpty(obj){
    for (let key in obj){
        return false
    } 
    return true
}


// Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0
for (let key in salaries){
    sum += salaries[key]
}


//Multiply numeric property values by 2


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *= 2
        }
    }
    return obj
}


console.log(multiplyNumeric(menu))