import {useEffect, useReducer, useState} from "react";

export default function App() {
    let reducer = (actin, payload) => {

    }
    const [counter, setCounter] = useState(1);
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos${counter}`).then(value => setCounter(value))
})
    // const fetch = async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos${counter}`)
    // }

    const [state, dispatch] = useReducer(reducer, null)
    return (


        <div>
            {counter}<br/>
            <button onClick={() => setCounter(prevState => prevState + 1)}>inc</button>
        </div>
    );
}
