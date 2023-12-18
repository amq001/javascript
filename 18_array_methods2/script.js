// delete
let num = [1, 2, 3, 4]
let num2 = [11, 22, 33, 44]
let num3 = [111, 222, 333, 444]
let a = delete num[0]
console.log(num, a)

//  concat
let newnum = num.concat(num2)
let newnum2 = num.concat(num2,num3)
console.log(newnum)
console.log(newnum2)

// Sort method
// Aplabatical sort
let no = [551,22,3,14,5,6,7,8,229]
console.log(no)
no.sort()
console.log(no)

//  Sort 
// ascending
let compare =(a,b)=>{
  return(a-b)
}
no.sort(compare)
console.log(no)
//decending
let compare1 =(a,b)=>{
  return(b-a)
}
no.sort(compare1)
console.log(no)

//reverse
no.reverse()
console.log(no)

// splice and slice
let x = no.splice(2,3,9,99,999)
console.log(no , x)

let newno = no.slice(3,5)
console.log(newno)