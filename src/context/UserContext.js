import React, { createContext, useState,useEffect } from 'react';

export const Context = createContext();

const UserContext =({children})=>{
    const [user,setUser] =useState({});    

    useEffect(()=>{
        const data = sessionStorage.getItem('user');
        const getUser = JSON.parse(data);
        setUser(getUser);
    },[])
    
    return(
        <Context.Provider value={{user,setUser}}>
            {children}
        </Context.Provider>
    );
}
export default UserContext;
