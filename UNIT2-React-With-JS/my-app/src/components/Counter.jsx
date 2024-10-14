import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
            setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        
        setInterval(() => {
            if(count === 5){
                clearInterval(count);
            }
            setCount(count + 1);
        }, 1000);
    }, [count], [handleDecrement], [handleIncrement]);
  return (
    <div>
        <h1>{count}</h1>
        
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={()=>{clearInterval(count)}}>clear</button>
    </div>
  )
}

export default Counter