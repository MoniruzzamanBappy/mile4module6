var i = 1;
var factorial = 1;
// var myFactorial = 5;
// for (i; i <= myFactorial; i++) {

//     factorial = factorial * i;
// }

// console.log(factorial);

function factorialResult(myfactorial) {
    for (i; i <= myfactorial; i++) {

        factorial = factorial * i;
    }
    return factorial;
}
let number = factorialResult(4);
console.log(number);

function factrorialReSults(num1) {
    let i = num1;
    var fact = 1;
    for (i; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}

let factorialnumber = factrorialReSults(4);
console.log(factorialnumber);