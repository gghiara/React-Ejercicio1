// A partir de ES6
let myVar = 0;
var myVar2 = 1;

const myDoc = document;

console.log(myDoc);

let myH1 = myDoc.getElementsByTagName("h1");

let myH3 = myDoc.getElementById("mySuperH3");

console.log(myH1);
console.log(myH3);

myH3.innerText = "Estoy modificando el texto dentro del H3"

// const myObj = {
//     "atributo" : "valor"
// }

// const myObjeto2 = {
//     atributo: "valor",
//     atributo2: "otro valor"
// }