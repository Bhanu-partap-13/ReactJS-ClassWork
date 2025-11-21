//create a Student class that stores a student's name and marks, and then checks if the student has passed or failed.

//Create 3 new students and print their details, results and grade.


//Create a class Student with properties: name, marks A method get Grade() that: prints "Grade A" if marks >= 85"Grade B" if marks >=65
// and < 85"Grade C" otherwise Then, create three student objects with different marks and call get Grade() for each.
class Student{
    constructor(name, marks){
        this.name=name;
        this.marks=marks;
    }
    result() {
        if(this.marks>=40){
            console.log(`${this.name} has passed.`);
        }
        else{
            console.log(`${this.name} has failed.`);
        }
    }
    grade() {
        if(this.marks >= 85){
            console.log("Grade A");
        }
        if(this.marks < 85 && this.marks >= 65){
            console.log("Grade B");
        }
        if(this.marks < 65 && this.marks >= 55){
            console.log("Grade C");
        }
        if(this.marks < 55 &&this.marks >= 40){
            console.log("Grade D");
        }
        if(this.marks < 40){
            console.log("Grade E");
        }
    }
}

const student1 = new Student("Pranjul", 24);
const student2 = new Student("Raj", 85);
const student3 = new Student("Raju", 80);

student1.result();
student1.grade();

student2.result();
student2.grade();

student3.result();  
student3.grade();  



// Create a variable name "John" and display it inside <h1> using jsx.

// create  a functional componenet called Greeting that displays: "Good Morning, React Student!" import and use it inside App.jsx

// Create a variable marks = 75 and display."Passed" if marks >= 40 else "Failed" using ternary operator inside {}).

// create a timer component that starts counting when we uses mounted lifecycle method and stops when unmounted. Display the timer value in seconds.
// Use setInterval in componentDidMount to increment the timer every second and clearInterval in componentWillUnmount to stop the timer.

