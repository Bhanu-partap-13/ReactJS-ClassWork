//destructure only the first and third elements from the array below and print them.
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const fruits = ["apple","banana", "cherry", "date", "elderberry"];
const [first,second,third] = fruits;
console.log(first);
console.log(third); 


// Create a function sumAll[...nums] that returns the sum of all arguments passed
// example: sumAll{2,3,4,5}

function sumAll(...nums){
    return nums.reduce((num,sum)=>sum+num,0);
}

console.log(sumAll(2,3,4,5));

//Create a function filterGreaterThan[limit, ...values] that returns only the values greater then limit

function filterGreaterThan(limit,...values){
    return values.filter((value) => value > limit);
}

console.log(filterGreaterThan(5,7,6,4,3,2,8,0));

// Write a function studentinfo that takes an object like this:
// {name: Rohit, age: 21, subjects:["Math", "Science", "English", "AI", "ML"]}
//Use destructing to extract name, age and subjects, rest operator to seperate core subjects (first 2)
//  and elective subject remaining 
// Spread operator is to clone the array before modifying it.

function studentinfo(studentinfo) {
    const {name, age, subjects} = studentinfo;
    const {n,a,...s} = subjects;
     
}