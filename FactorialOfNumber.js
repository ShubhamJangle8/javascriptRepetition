let number = process.argv[2];
let factorial = 1;
for(let i = number; i > 0; i--){
  factorial = factorial * i;
}
console.log("Factorial of a number is " + factorial);