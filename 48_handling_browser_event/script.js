

let x = function(e){
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e.currentTarget)
    console.log(e.clientX,e.clientY)
    alert("hello bois")
}
btn.addEventListener('click',x)

// let y = function(e){
//     alert("hello bois2")
// }
// btn.addEventListener('click',y)

// let a = prompt("Enter a number")
// if (a=="2") {
//     btn.removeEventListener('click',x)
// }



