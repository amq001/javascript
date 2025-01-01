let a = [
    "Initailizing hack tool...",
    "connecting to facebook...",
    "connection successful...",
    "username : AMQ",
    "password : ***********",
    "Hack Successful"
]
const sleep = async(second)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },second * 1000)
    })
}
const showHack = async (message)=>{
    await sleep(2)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () =>{
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i])
        
    }
})()