let display = {
    name: "Bhanu Partap",
    function1: function() { // this we have made a extra function beacuse there is not this in the arrow function.
        // Arrow function inside regular function
        let arrowFunction = () => {
            console.log("Hello, " + this.name);
        }
        arrowFunction();
    }
}
display.function1(); 

// Without Arrow function

let display1 = {
    name: "Bhanu Partap",
    function1: function() {
            console.log("Hello, " + this.name);
    }
}
display1.function1(); 