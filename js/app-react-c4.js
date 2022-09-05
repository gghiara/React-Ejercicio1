let myDom = document;

/* OBJETO; */
const myDog = {
  name: "Firulais",
  age: 5,
  legs: 4
};


const myCat = {
    name: "Milo",
    age: 6,
    legs: 4
}

console.log(myCat.name);
console.log(myDog.legs);

/* LE AGREGO UNA PROPIEDAD */
myCat.tail = 1;

console.log(myCat.tail, "LE AGREGIE COLA");

/* OTRA FORMA */

/* function myMouse() {
    return "perez";
} */

/* TAMBIEN PUEDE SER */

/* function Mouse() {
    this.age = 4;
    this.name = "Perez";
}

const myMouse = Mouse();

console.log(myMouse); */

/* TAMBIEN PUEDE SER */

/* CREAMOS "LA PLANTILLA" */

class Mouse {
    constructor(name) {
        this.name = name;

    }

}

const myMouse = new Mouse("Perez");
console.log(myMouse);