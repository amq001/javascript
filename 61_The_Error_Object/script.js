try{
    aqib
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}

try{
    throw new ReferenceError("Aqib is not good")
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}

// try{
//     console.log(aqib)
//     throw new ReferenceError("Aqib is not good")
// }
// catch(err){
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }

try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>120){
        throw new ReferenceError("Not possible")
    }
}catch (err){
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}
console.log("The scipt is running")





























