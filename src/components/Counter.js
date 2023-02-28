import {useState} from 'react';

const Counter = () => {
    let [counter, setCounter]= useState(0);
    const increase = () => {
        setCounter(counter + 1);
    }
    const decrease = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }
    return(
        <div className="counter">
            <p>{counter}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Обнулить</button>
        </div>
    );
}

export default Counter;