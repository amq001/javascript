//  Syncronous programming
// let a = prompt("what is your name?")
// let b = prompt("what is your age?")
// let c = prompt("what is your fav color?")
// console.log(a + " is " + b + " years old and has " + c + " fav color")

//  Asyncronous programming
// console.log("start")
// setTimeout(function(){
//     console.log("Hey I am good")
// },3000)
// console.log("End")

//  Callbacks
function loadScript(src, Callbacks){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("loaded script with SRC: " + src)
        Callbacks(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with SRC: " + src)
        Callbacks(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}
function hello(error, src){
    if (error) {
        console.log(error)
    }
    console.log("hello world" +src)
}
function goodmorning(error, src){
    if (error) {
        console.log(error)
    }
    console.log("goodmorning" +src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",goodmorning)
