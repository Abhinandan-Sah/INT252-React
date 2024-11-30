import React, { useState } from 'react'

const Practice3 = () => {
    const [userDate, setUserData] = useState({});
    const [toggle, setToggle] = useState(false);
    const[backgroundColor, setBackgroundColor] = useState('white');
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        setUserData({name, email});
        e.target.reset();
        alert(`Welcome ${name}!`);
    }
  return (
    <div style={{backgroundColor: toggle? 'black': backgroundColor} }>
        <button onClick={()=>setToggle(!toggle)}>Change color theme</button>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' placeholder='Enter Name' /><br/>
            <label htmlFor="email">Email: </label>
            <input type='email' name='email' placeholder='Enter email' /><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Practice3