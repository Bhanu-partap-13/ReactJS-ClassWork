    import { useRef } from "react";

    function UseRefExample() {
        const inputRef = useRef(null);

        function handleClick() {
            inputRef.current.focus();
        }
        return (
            <div>
                <input ref={inputRef} type="text" placeholder="Focus me on button click" />
                <button onClick={handleClick}>Focus Input</button>
            </div>
        );
    }
    export default UseRefExample;
