let a = prompt("what is your age")
if(a>0 && a<18){
  console.log("under 18")  
}
else if(a>=18){
  console.log("18+")
}
else{
  console.log("invalid age")
}
// ternary operators
console.log("you can",a<18? "not drive":"drive")

//  Switch
let b = "Anas";
switch (b){
  case "Anas":
    console.log("anas");
    break;
  case "Aqib":
    console.log("aqib");
    break;
  case "Zia":
    console.log("zia")
    break;
}