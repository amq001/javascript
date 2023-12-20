//  ex01
"Generate a random number and guess it"
let a = Math.floor(Math.random() * 10);
console.log(a)
let b = prompt("Guess the number")
if(a==b){
  console.log("correct")
}
else{
  console.log("incorrect")
}