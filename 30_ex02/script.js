//  Ex02
console.log("rock paper scissors")
let arr = ["rock","paper","scissors"]
let n = Math.floor(Math.random() * 3);
console.log(n)
let ans = prompt("rock,paper or scissors")
if(arr[n]=="rock" && ans=="rock"){
  console.log("draw")
}
else if(arr[n]=="paper" && ans=="paper"){
  console.log("draw")
}
else if(arr[n]=="scissors" && ans=="scissors"){
  console.log("draw")
}
else if(arr[n]=="rock" && ans=="paper"){
  console.log("u win")
}
else if(arr[n]=="rock" && ans=="scissors"){
  console.log("u loss")
}
else if(arr[n]=="scissors" && ans=="rock"){
  console.log("u win")
}
else if(arr[n]=="scissors" && ans=="paper"){
  console.log("u loss")
}
else if(arr[n]=="paper" && ans=="scissors"){
  console.log("u win")
}
else if(arr[n]=="paper" && ans=="rock"){
  console.log("u loss")
}
else{
  console.log("incorrect input")
}