//  Q1
/*
let age = prompt("enter age")
age = Number.parseInt(age)
const canDrive = (a)=>{
  return age>=18?true:false
}
if(canDrive(age)){
  alert("you can drive")
}
else{
  alert("you cannot drive")
}
*/

//  Q2
/*
const canDrive = (a)=>{
  return a>=18?true:false
}
let runa = true
while (runa) {
let age = prompt("enter age")
age = Number.parseInt(age)
  
  if(canDrive(age)){
  alert("you can drive")
}
else{
  alert("you cannot drive")
}
  runa = confirm("do u want to play again")
}
*/

//  Q3
/*
const canDrive = (a)=>{
  return a>=18?true:false
}
let runa = true
while (runa) {
let age = prompt("enter age")
age = Number.parseInt(age)

  if(age<0){
    console.error("plz enter valid age")
    break
  }
  
  if(canDrive(age)){
  alert("you can drive")
}
else{
  alert("you cannot drive")
}
  runa = confirm("do u want to play again")
}
*/

//  Q4
/*
let num = prompt("enter your number")
num = Number.parseInt(num)
if(num>4){
  location.href = "https://google.com"
}
*/

//  Q5
let color = prompt("enter the bgcolor")
document.body.style.background = color