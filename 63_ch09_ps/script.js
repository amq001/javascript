// Q1
// const loadScript = async (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = ()=>{
//             resolve(src + " Done ")
//         }
//         document.body.append(script)
//     })
// }
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// a.then((val)=>{
//     console.log(val)
// })

// Q2
// const main2 = async() => {
//     console.log(new Date().getMilliseconds())
//     let a2 = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
//     console.log(a2)
//     console.log(new Date().getMilliseconds())
// }
// main2()

// Q3
// let p = ()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Ja na bhai theek kar"))
//     },3000)
// })
// }

// let a = async()=>{
//     try{
//         let c = await p()
//     }
//     catch(err){
//         console.log("This error has been handled")
//     }
// }
// a()

// Q4
let p1 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
    })
}
let p2 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
}
let p3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}
const run = async ()=>{
    console.time("run")
    // let a1 = await p1()
    // console.log(a1)
    // let a2 = await p2()
    // console.log(a2)
    // let a3 = await p3()
    // console.log(a3) //It takes 6 seconds to execute

    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1,a2,a3)
    console.log(a1a2a3)
    console.timeEnd("run")
    // It takes 3 seconds to execute
}
run()








































