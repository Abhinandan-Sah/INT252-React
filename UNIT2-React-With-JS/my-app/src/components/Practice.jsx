import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../utils/AuthContext'

const Practice = (props) => {
    const {isAuthenticated, login, logout}= useContext(AuthContext);

    // const [userData, setUserData]= useState({});
    // useEffect(()=>{
    //     setUserData({"name": "Avi"});
    // },[])
    
    // const useContext = useContext(userData);

  return (
    <div>
        <h1>{isAuthenticated? 'Logged In': 'logged out'}</h1>
        <button onClick= {login}>Login</button>
        <button onClick= {logout}>Logout</button>
    </div>
  )
}

export default Practice