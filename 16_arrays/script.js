let a = [1,2,3,4,"a",null]
console.log(a)
a[6] = 55
for(let i=0;i<a.length;i++){
  console.log(a[i])
}
a[1] = 55
console.log(a)
console.log(typeof a)
