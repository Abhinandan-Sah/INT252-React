// import { useEffect, useRef, useState } from "react";

// function Counter2(){
//     const [value, setValue] = useState(0);
//     const count = useRef(0);
//     console.log(count);

//     useEffect(()=>{
//         count.current = count.current+1;
//     })

//     return(
//         <>
//             <button onClick={()=>{setValue(prev=>prev+1)}}>increment</button>
//             <h1>{value}</h1>
//             <button onClick={()=>{setValue(prev=>prev-1)}}>Decrement</button>

//         </>
//     )
// }

// export default Counter2;

// import React, { useRef, useState } from 'react'

// const Counter2 = () => {
//     const input = useRef();
//     const [value, setValue] = useState('');

//     const onClick = ()=>{
//         console.log(input);
//         // input.current.style.background= "green";
//         setValue(input.current.value)
//     }

//   return (
//     <div>
//         <h1>Using USEREF</h1>
//         <input type="text" ref={input} />
//         <button onClick={onClick}>
//             Add
//         </button>
//         <p>{value}</p>
//     </div>
//   )
// }

// export default Counter2

import React, { useMemo, useState } from 'react'

const Counter2 = () => {
    const [number, setNumber] = useState()
    const [counter, setCounter] = useState()

    function cubenum(num){
        console.log('done');
        return Math.pow(num, 3);
    }

    const result = useMemo(()=> cubenum(Number(number), [number]));

  return (
    <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <h1>{number}</h1>
        <button onClick={()=>setCounter(result)}></button>
    </div>
  )
}

export default Counter2