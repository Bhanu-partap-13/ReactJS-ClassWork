// DOM (Document object Model) it is a tree like structure of the HTML in the webpage.
// (spread operator denoted by ...) this is the operator that is used to spread the elements of an array or any object into individual elements.
// (rest parameter denoted by ...) this is the parameter  that is used when you donot know the exact number of arguments to pass in the functions or the values in objects/arrays.
//Virtual DOM is the copy of the DOM.  IT stores in the RAM and then runs in the browser. It only changes the part that we want like notifications etc.
// Components innthe JAvascript make the code easy to understand.
// APP.JSX - main compontent where our app starts.
// main.jsx - this file connects the react app to the index.html file.
//Babel - It converts the jsx code to the javascript code.
//functional component - it is a simple javascript function that returns the react element.
// class component - it is a more complex component that can hold and manage its own state.
// Fragments in React allow you to group a list of children without adding extra nodes to the DOM.
// external CSS like App.css that is used to style the App.jsx file.
// In jsx the CSS property is like if there si background color than it will be written as backgroundColor not as background-color.
//TailwindCSS - ready to use classes directly in our jsx.
// arrow fn - it is a shorter syntax for writing functions in javascript.
//Events in React JS - Wea reusing camelCase instead for the lowercase and functiona as a reference instead of a string.

//What is function as reference in even

// Stateful components - These components can hold and manage there own state. For eg: we are having a button count and it is increasing.
// Stateless components - These are the components that cannot hold and manage there own state. For eg. I someone prints any text and we cannot update it into the broswer so that is the stateless components.
// component lifecycle - It is the series of methods that are invoked at different stages of a component's existence, from its creation to its removal from the DOM.
// Mounting - When the component is being created and inserted into the DOM.
// Updating - When the component is being re-rendered as a result of changes to either its props or state.
// Unmounting - When the component is being removed from the DOM.
// Props - Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.
// State - State is a built-in object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

//events in js - events are used to handle the actions performed by the user.
// Hooks - Hooks are functions that let you "hook into" React state and lifecycle features from function components. 
// //They allow you to use state and other React features without writing a class.
// map - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// ti=his - we are using 'this' to store the data in the class components.
// how we optimize fn - we are using useCallback and useMemo to optimize the functions in the react js.
// useState - It is a Hook that allows you to have state variables in functional components. (to store the data that can be changed and updated), (we use the dependency array)
// useEffect - It is a Hook that lets you perform side effects in function components. 
// It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.

// useContext - It is a Hook that allows you to access the context for a component. (to share data that can be considered “global” for a tree of React components)
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

//userRef() - It is a Hook that allows you to persist values between renders. (It can be used to store a mutable value that does not cause a re-render when updated.)
//useRef() - to access the DOM element.
// For eg: I am having a button and when I click on it the count is increasing but the focus is lost so to maintain the focus we use the useRef() hook.

// useReducer - It is a Hook that is used for state management in React applications. (an alternative to useState)

// useCallback - It is a Hook that returns a memoized callback function. (to optimize performance by preventing unnecessary re-creations of functions)
// useMemo - It is a Hook that returns a memoized value. (to optimize performance by memoizing expensive calculations)

//1) how we can fetch the data from the API,2) then how we can use the timer functions in the react JS

// forms - In React, forms are used to collect user input and manage the state of that input within a component.
//handling forms - 
// Controlled components - In React, controlled components are form elements (like input, textarea, select) whose values are controlled by React state. The state of the form element is updated through event handlers, and the displayed value is always in sync with the component's state.
// Uncontrolled components - In React, uncontrolled components are form elements that manage their own state internally, rather than relying on React state. You can access the value of an uncontrolled component using refs. We are storing the values directly in the DOM Elements.


