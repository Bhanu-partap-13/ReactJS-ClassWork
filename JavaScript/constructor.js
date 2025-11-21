//                   Function Constructor Version
/*
function Car(brand) {
    this.brand = brand;
    this.start = function() {
        console.log(`${this.brand} car started.`);
    };
}

const c1 = new Car("Toyota");
const c2 = new Car("Honda");

console.log(c1.start === c2.start);

*/
// What is the main difference between the constructor and class is that when are using the constructor,
// it make duplicate entries for every variable (car) that we have used.
// But, In the class there is only one version fo the function and we saves our memory.

//                  Class Version

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} car started.`);
    }
}

const c1 = new Car("Toyota");
const c2 = new Car("Honda");

console.log(c1.start === c2.start);