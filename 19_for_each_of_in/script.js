
let num = [3, 54, 1, 2, 4]
//for (let i = 0; i < num.length; i++) {
//  console.log(num[i])
//}

//  For each loop
num.forEach((x)=>{
  console.log(x*x)
})
// for in
for (let i in num){
  console.log(i,num[i])
}
//for of
for (let i of num){
  console.log(i)
}

//  Array.from
let a = "aqib"
let arr = Array.from(a)
console.log(arr)
