// Q1
// let arr = [1,2,3,4,5]
// let a = prompt("enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Q2
let arr2 = [1,2,3,4,5]
let a2
do{
a2 = prompt("enter a number")
a2 = Number.parseInt(a2)
arr2.push(a2)
}while(a2!=0)
console.log(arr2)

// Q3
let arr3 = [10,2,30,4,50]
let a = arr3.filter((x)=>{
  return x%10==0
})
console.log(a)

// Q4
let arr4 = [2,3,4]
let a4 = arr4.map((x)=>{
  return x*x
})
console.log(a4)

// Q5
let arr5 = [1,2,3,4,5]
let a5 = arr5.reduce((x,y)=>{
  return x*y
})
console.log(a5)



