import { useState, useCallback } from "react";

function App() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);
    return (
        <div>
            <h1>Count: {count}</h1>
            <Button handleClick={increment} />
        </div>
    );
}
function Button({ handleClick }) {
    console.log("Button rendered");
    return <button onClick={handleClick}>Increase Count</button>;
}
export default App;
