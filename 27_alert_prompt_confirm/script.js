alert("Enter the value of a")
let a = prompt("Enter a here","578")
a = Number.parseInt(a)
let write = confirm("Do you want it to write on page")
if(write){
  document.write(a)
}
else{
  document.write("plz allow to write")
}
alert("a is of type "+(typeof a))



