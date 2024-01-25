async function aqib(){
    let karachi = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },1000)
    })
    
    let lahore = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("37 deg")
        },6000)
    })
    // karachi.then(alert)
    // lahore.then(alert)
    console.log("Fetching karachi weather plz wait")
    let kw = await karachi
    console.log("Fetched karachi weather value is : " + kw)

    console.log("Fetching Lahore weather plz wait")
    let lw = await lahore
    console.log("Fetched lahore weather value is : "+lw)
    return [kw,lw]
}
const chaqib = async ()=>{
    console.log("Chaqib here")
}


const main1 = async ()=>{
    console.log("Weather reports")
    let a = await aqib()
    let b = await chaqib()
}
main1()

// console.log(a)

// async function aqib(){
//     return 5
// }
// aqib().then((x)=>{
//     alert(x)
// })