import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function UserReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
        </div>
    );
}

export default UserReducer;
