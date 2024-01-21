let p1 = new Promise((resolve,reject)=>{
    console.log("Pending")
    setTimeout(()=>{
        console.log("success")
        resolve(true)
        // reject(new Error("I am an error"))
    },5000)
})

// console.log(p)
let p2 = new Promise((resolve,reject)=>{
    console.log("Pending")
    setTimeout(()=>{
        console.log("failed")
        // resolve(true)
        reject(new Error("I am an error"))
    },5000)
})
// console.log(p2)

// to get value
p1.then((value)=>{
    console.log(value)
})


// to catch error
// p2.catch((value)=>{
//     console.log("there is an error")
// })



p2.then((value)=>{
    console.log("there is an error")
},(error)=>{
    console.log(error)
})


