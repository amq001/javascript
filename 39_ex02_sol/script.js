let arr = ["rock","paper","scissors"]
let n = Math.floor(Math.random() * 3);
document.write(arr[n]+" ")
console.log(arr[n])
let ans = prompt("rock,paper or scissors")
if(arr[n]=="rock" && ans=="rock"){
  document.write("draw")
}
else if(arr[n]=="paper" && ans=="paper"){
   document.write("draw")
}
else if(arr[n]=="scissors" && ans=="scissors"){
document.write("draw")
}
else if(arr[n]=="rock" && ans=="paper"){
document.write("u win")
}
else if(arr[n]=="rock" && ans=="scissors"){
    document.write("u loss")
}
else if(arr[n]=="scissors" && ans=="rock"){
    document.write("u win")
}
else if(arr[n]=="scissors" && ans=="paper"){
    document.write("u loss")
}
else if(arr[n]=="paper" && ans=="scissors"){
    document.write("u win")
}
else if(arr[n]=="paper" && ans=="rock"){
    document.write("u loss")
}
else{
    document.write("incorrect input")
}