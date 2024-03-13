//      ONE
// let options = {
//     method : "POST",
//     headers:{
//         "Content-type":"application/json"
//     }
// }
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//      TWO
// let options = {
//     method : "POST",
//     headers:{
//         "Content-type":"application/json"
//     },
//     body: JSON.stringify({
//         title: 'Aqib',
//         body: 'Bhai',
//         userId: 111,
//       }),
// }
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//      THREE
// const createToDo = async () => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "Aqib",
//       body: "Bhai",
//       userId: 111,
//     }),
//   };
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
//   let response = await p.json()
//   return response
// };

// const mainFunc = async ()=>{
//     let todo = await createToDo()
//     console.log(todo)
// }
// mainFunc()


//      Four
// const createToDo = async (todo) => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   };
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
//   let response = await p.json()
//   return response
// };

// const mainFunc = async ()=>{
//     let todo = {
//               title: "Aqib_2",
//               body: "Bhai_2",
//               userId: 111,
//             }
//     let todor = await createToDo(todo)
//     console.log(todor)
// }
// mainFunc()



//      FIVE
const createToDo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
  let response = await p.json()
  return response
};

const getTodo = async (id)=>{
    let p = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    let r = await response.json()
     return r
}

const mainFunc = async ()=>{
    let todo = {
              title: "Aqib_2",
              body: "Bhai_2",
              userId: 111,
            }
    let todor = await createToDo(todo)
    console.log(todor)
    console.log(await getTodo(9))
}
mainFunc()















