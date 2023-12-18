let name1 = "aqibmehtab"
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1[2])
console.log(name1.slice(2))
console.log(name1.slice(2,6))
console.log(name1.replace("aqi","rhi"))
let name2 = "arizmehtab"
console.log(name1.concat(" is a friend of ", name2, " ok "))
let name3 = "   affaf   "
console.log(name3.trim())
//uppercase
//lowercase
//slice
//replace
//concat
//trim
// Original string never change they are immutable
for(i=0;i<name1.length;i++){
  console.log(name1[i])
}