import React, { useRef } from 'react';

function UnControlledFn() {
    const inputRef = useRef(); // to access the DOM element
    const handleSubmit = (event) => { //
        event.preventDefault();
        alert("Value: " + inputRef.current.value);
        
    };
    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );

}

export default UnControlledFn;