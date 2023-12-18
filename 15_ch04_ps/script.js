//  Q1
console.log("qai\"".length)

//  Q2
let sen = "the quick brown fox jumps over the lazy dog";
let word = "fox"
console.log(sen.includes(word))
console.log(`The word "${word}" ${sen.includes(word)? "is":"is not"} in the sentence`)
console.log(sen.startsWith("the"))
console.log(sen.endsWith("dog"))

//  Q3
let abc = "AQib"
console.log(abc.toLowerCase())
console.log(abc.toUpperCase())

//  Q4
let str = "Plz give Rs 1000"
console.log(str.slice("Plz give Rs ".length))

//  Q5
let xyz = "sohaib"
xyz[3] = " 3 "
console.log(xyz)
//not change cuz str is immutable