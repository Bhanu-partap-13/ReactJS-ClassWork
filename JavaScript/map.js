// Given an array of numbers, use map() to create a new array that containes each number doubled.

const number = [1,2,3,4,5];
const doubled = number.map((num) => num*num);

console.log(doubled);

// From the array [12,45,67,20,5,32], use filter() to create a new array that contains only the numbers greater than 20.

const num = [12,45,67,20,5,32];
const filterNum = num.filter((n) => n>20);
console.log(filterNum);

// Combine arrays and remove duplicates given:
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

const arr1=[1,2,3];
const arr2=[3,4,5];
const combine = arr1.concat(arr2);
const unique = [...new Set(combine)]; // ... is the spread operator that will expand the array and Set is used to remove duplicates
console.log(unique);

//Create a class called Student class stores a student's name and marks, (in an array).
//  Add a method that checks if the student has passed all subjects (marks >= 40). 
// using the .every()method.

class Student{
    constructor(name, marks){
        this.name=name;
        this.marks=marks;
    }

    passFail(){
        const pass = this.marks.every( mark => mark >=40);
        return pass;
    }
}



const student1 = new Student("Raju", [45,67,89,90]);
const student2 = new Student("Raj", [34,67,89,90]);

console.log(student1.passFail());
console.log(student2.passFail());


