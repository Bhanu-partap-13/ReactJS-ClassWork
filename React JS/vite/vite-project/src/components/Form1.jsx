import {useState} from 'react';

function Form1() {
    const [name, setName] = useState(' ');
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    return (
    <div>
        <form>
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
        <p>Your name is: {name}</p>
    </div>
    );
}

export default Form1;