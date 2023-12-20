
//    MAP

let arr = [11, 22, 33]
//console.log(arr)
let a = arr.map((val, ind, array) => {
  console.log(val, ind, array)
  return (val + 2)
})
console.log(a)
// map and forEach are same but map make new array and forEach doesn't


//    FILTER
let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log(a2)

//    REDUCE
/*
let arr3 = [1,2,3,5,2,1]
let newarr3 = arr3.reduce((a,b)=>{
  return a+b
})
console.log(newarr3)
*/

let arr3 = [1,2,3,5,2,1]
  const reduce_func = (a,b)=>{
  return a+b
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)














