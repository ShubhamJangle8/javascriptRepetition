let amount = 100;
let noOfBets = 0;
let winCount = 0;
while(amount > 0 && amount < 200){
  let outcome = Math.floor(Math.random() * 10) % 2;
  if(outcome == 0){
    amount --;
  }
  else{
    amount++;
    winCount++;
  }
  noOfBets++;
}
console.log("Number of counts required to win is " + winCount);
console.log("Total number of bets required are " + noOfBets);