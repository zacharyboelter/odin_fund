

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let result = (a + b < 4) ? 'Below' : 'Over'

// console.log(result)

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }


// let login = 'Hellow orld'

// let message = (login == 'Employee') ? 'Hello':
//     (login == 'Director') ? 'Greetings':
//     (login == '') ? 'No login':
//     ''
// console.log(message)

// function min(a, b){
//     return (a < b) ? a : b;
// }

// console.log(min(50, 51))



// function pow(x, p){
//     x = prompt('What is x? ')
//     p = prompt('To what power? ')

//     return (x ** p)
// }

// console.log(pow())

// function cap(str){
//     let x = str.toLowerCase()
//     let capital = x[0].toUpperCase() + x.slice(1)
//     return capital
// }

// console.log(cap('HALLO'))

// function lastLetter(str){
//     return str.charAt(str.length -1)
// }

// console.log(lastLetter('hello'))
// console.log(lastLetter('fucking'))
// console.log(lastLetter('cunt'))


// FizzBuzz

let answer = parseInt(prompt('Enter a number for FizzBuzz: '))

for (let i = 1; i <= answer; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    } else if(i % 3 === 0){
        console.log('Fizz')
    } else if(i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}