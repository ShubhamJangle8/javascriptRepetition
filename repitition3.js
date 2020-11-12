//Checking for prime number 
let number = process.argv[2];
let is_prime = true;
if(number == 1){
  is_prime = false;
}else if(number == 2){
  is_prime = true;
}
else{
  for(let i = 2 ;i < number;i++){
    if(number % i == 0){
      is_prime = false;
      break;
    }
  }
}
console.log("Number " + number + " is prime is " + is_prime);