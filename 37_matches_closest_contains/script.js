let id_1 = document.getElementById("id1")
let sp_1 = document.getElementById("sp1")
console.log(id_1)
console.log(id_1.matches(".class")) //false
console.log(id_1.matches(".box"))   //true
console.log(sp_1.closest("#sp1"))
console.log(sp_1.closest(".box"))
console.log(id_1.contains(sp_1))    //true
console.log(sp_1.contains(sp_1))    //true
console.log(sp_1.contains(id_1))    //false
