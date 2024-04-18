// // *************************************************  Q1  ****************************************************
// let url = "https://kontests.net/api/v1/all"
// let response = fetch(url)
// response.then((v)=>{
//     return v.json()
// }).then((v)=>{
//     console.log(v)
//     ihtml = ""
//     for(item in v){
//         console.log(v[item])
//         ihtml += `
//         <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${v[item].name}</h5>
//           <p class="card-text"><a href="${v[item].url}">Visit here</a></p>
//           <p>Starts at ${v[item].start_time}</p>
//           <p>Starts at ${v[item].end_time}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//           </div>

//         `
//     }
//     cardContainer.innerHTML = ihtml
// })

// *********************************************************Q2 & Q3**********************************************
let n = localStorage.getItem("note")
alert("Your note is " + n )

let a = prompt("Enter your note")
if (a) {
  localStorage.setItem("note",a)
}

// **********************************************************Q4*************************************************
let c = confirm("do you want to delete note?")
if (c) {
  localStorage.removeItem("note")
  alert("Your note has been deleted")
}