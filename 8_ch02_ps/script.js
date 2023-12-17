//  Q1
let a = prompt("what is your age?")
a = Number.parseInt(a)
if(a>=10 && a<=20){
  console.log("correct age")
}
else{
  console.log("incorrect age")
}

//  Q2
let b = prompt("number value of b")
switch (b){
  case "10":
    console.log("age is 10 by switch")
    break;
  case "11":
    console.log("age is 11 by switch")
    break;
  case "12":
    console.log("age is 12 by switch")
    break;
  case "13":
    console.log("age is 13 by switch")
    break;
  case "14":
    console.log("age is 14 by switch")
    break;
  case "15":
    console.log("age is 15 by switch")
    break;
  case "16":
    console.log("age is 16 by switch")
    break;
  case "17":
    console.log("age is 17 by switch")
    break;
  case "18":
    console.log("age is 18 by switch")
    break;
  case "19":
    console.log("age is 18 by switch")
    break;
  case "20":
    console.log("age is 18 by switch")
    break;
  default:
    console.log("out of range")
}


//  Q5
let c = prompt("enter value of c")
console.log("you can", c>=18? "drive":"not drive")