for(let i = 0; i < 5; i++){
    console.log(i)
  }
  
  let obj = {
    harry : 90,
    shubh : 85,
    sohaib : 50,
  }
  
  //  for in
  
  for (let a in obj){
    console.log(a)
    console.log("Marks of " + a + " are " + obj[a])
  }
  
  //  for of
  for (let a of "Harry"){
    console.log(a)
  }