let number1 = 2;
let number2 = 19;
let myArray = new Array();
for (let i = number1; i <= number2; i++) {
    if (isPrime(i)) {
        myArray.push(i);
    }
}
for (let i of myArray) {
    console.log(i);
}
function isPrime(number) {
    if (number == 1) {
        return false;
    }
    else if (number == 2) {
        return true;
    }
    else {
        for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}