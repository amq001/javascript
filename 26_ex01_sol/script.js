let a = Math.floor(Math.random() * 100);
a = Number.parseInt(a)
console.log(a)
let b;
let score = 100
while(a!=b){
  score = score-1
  b = prompt("Guess the number")
    if(a==b){
      console.log("correct")
      console.log(`you guess the correct number in ${100-score} attempts`)
    }

    else if(a<b){
      console.log("number is lesser")
    }
    else if(a>b){
      console.log("number is greater")
    }
    else{
      console.log("out of range")
    }
}
