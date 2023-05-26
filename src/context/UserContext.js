import React, { createContext, useState,useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

export const Context = createContext();

const UserContext =({children})=>{
    const [user,setUser] =useState({}); 
    const navigate = useNavigate();   

    useEffect(()=>{
        const data = sessionStorage.getItem('user');
        const getUser = JSON.parse(data);
        setUser(getUser);
    },[])
    const logout=()=>{
        sessionStorage.removeItem('user');
        navigate('/login');
    }

    return(
        <Context.Provider value={{user,setUser,logout}}>
            {children}
        </Context.Provider>
    );
}
export default UserContext;
