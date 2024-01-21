let promise = new Promise(function(resolve,reject){
    alert("Hello")
    resolve(56)
})
console.log("kesa hai?")
setTimeout(function(){
    console.log("hello in 2 second")
},2000)
console.log("My name is Aqib")
console.log(promise)
