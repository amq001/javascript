// alert(document.cookie)
// document.cookie = "name=aqib"
// document.cookie

console.log(document.cookie)
document.cookie = "name=aqib001"
document.cookie = "name2=aqib002"
let key = prompt("enter the key")
let value = prompt("enter the value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// decodeURIComponent("aib%3Aa")
console.log(document.cookie)