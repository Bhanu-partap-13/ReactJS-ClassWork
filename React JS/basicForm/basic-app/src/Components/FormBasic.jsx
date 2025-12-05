import {useState} from 'react';

// when we are using {useRef}

// function FormBasic() {
//     const nameRef = useRef(null);
//     function handleClick() {
//         alert(`Hello, ${nameRef.current.value}!`);
//     }
//     return (
//         <>
//         <div className="form-container">
//             <h2>Uncontrolled Form Example</h2>
//             <input type="text" ref={nameRef} placeholder="Enter your name" />
//             <button onClick={handleClick}>Greet Me</button>
//         </div>

//         </>
//     )
// }


// export default FormBasic;

//we are using the e.target.value method - ye kya krta hai jaise pehle ye
function FormBasic() {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Email: ${email}, Password: ${pass}`);

    }
    return (
        <div className="form-container">
            <h2> Basic Form </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Email bhro' 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={pass} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='pass bhro'
                    required
                />
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}   

export default FormBasic;