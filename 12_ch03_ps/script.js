//  Q1
let marks = {
    phy : 12,
    che : 10,
    maths : 13
  }
  // for
  for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }
  //  Q2
  // for in
  for (let j in marks){
    console.log("Marks of sub "+ j +" are "+marks[j])
  }
  
  //  Q3
  let cn = 40
  let i
  while(i!=cn){
    i = prompt("enter a number")
  }
  console.log("You entered a correct number")
  
  //  Q4
  let aa = 5
  let ab = 15
  let ac = 25
  let ad = 35
  let ae = 45
  const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;  
  }
  console.log(mean(aa,ab,ac,ad,ae))