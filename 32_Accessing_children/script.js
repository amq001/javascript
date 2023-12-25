console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

document.body.childNodes[0] === document.body.firstChild;
document.body.childNodes[document.body.childNodes.length - 1] === document.body.lastChild;

// return node list not array to convert the node list into array we follow the following steps
// child nodes looks like array but not an array we have to convert it in an array

let arr = Array.from(document.body.childNodes);
console.log(arr);
