let head_count = 0;
let tail_count = 0;
while(head_count != 11 && tail_count != 11){
  let coin = Math.floor(Math.random() * 10) % 2;
  if(coin == 0){
    console.log("Heads it is...");
    head_count++;
  }
  else{
    console.log("Tails it is...");
    tail_count++;
  }
}

  