// create a form with username, emial and password on submit show the values using uncontrolled components

import { useRef } from 'react';


function UnControlled() {
    const inputRef = useRef(); // to access the DOM element
    const passRef = useRef();
    const emailRef = useRef();
    const handleSubmit = (event) => { //
        event.preventDefault();
        alert("Value: " + inputRef.current.value + " Email: " + emailRef.current.value + " Password: " + passRef.current.value);


    };
    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" ref={inputRef} />
            <input type="email" ref={emailRef} />
            <input type="password" ref={passRef} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default UnControlled;


// controlled method
// import { useState } from 'react';

// function Controlled() {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

// const handleClick = event => {
    //   event.preventDefault();   
    //   alert("Username: " + username + " Email: " + email + " Password: " + password); };
    // return (
    // form onSubmit={handleClick}>

    // <input type="text"  value={username} onChange={e => setName(e.target.value)} />
    // <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    // <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    // <button type="submit">Submit</button>
    // </form> 
//);

//}

// export default Controlled;