let number = process.argv[2];
let outcome = 2;
while(outcome <= number){
  console.log(outcome);
  if(outcome > number){
    break;
  }
  outcome = outcome * 2;
}