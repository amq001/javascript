// // Q1
// document.getElementById("jan".toLowerCase()).addEventListener("click", function(){
//     alert("Hello000000 jan")
// })

// //  Q3
// document.getElementById("google").addEventListener("click", function(){
//     window.location = "https://www.google.com"
// })

// // Q4
// setInterval(async function(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log(await fetchContent(url))
// },3000)


// Q5
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},300)