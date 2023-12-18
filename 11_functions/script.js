//  function
console.log("hello jee")
function OnePlusAvg(x,y){
    console.log("Done")
    return 1 + (x+y)/2
  }
  let a = 1
  let b = 2
  let c = 3
  console.log(OnePlusAvg(a,b))
  console.log(OnePlusAvg(b,c))
  console.log(OnePlusAvg(a,c))
  
  //  Arrow function
  const sum = (p,q,r)=>{
    return (p+q+r)
  }
  console.log(sum(a,b,c))
  
  const hello = ()=>{
    console.log("jaa na bhai")
  }
  hello();