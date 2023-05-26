import React, { createContext, useState } from 'react';

export const Context = createContext();

const UserContext =({children})=>{
    const [user,setUser] =useState({});
    
    return(
        <Context.Provider value={{user,setUser}}>
            {children}
        </Context.Provider>
    );
}
export default UserContext;
