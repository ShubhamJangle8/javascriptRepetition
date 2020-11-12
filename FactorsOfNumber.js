let number = parseInt(process.argv[2]);
let factors = new Array();
while(number % 2 == 0){
  factors.push(2);
  number = number / 2;
}
for(let i = 3; i <= number * number; i = i + 2){
  while(number % i == 0){
    number = number / i;
    factors.push(i);
  }
}
for(let i = 0; i < factors.length; i++){
  console.log(factors[i]);
}