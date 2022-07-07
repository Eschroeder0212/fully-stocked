import React, { useContext, useState, createContext } from 'react';



const LoginContext = createContext([]);
export const useLogin = () => {
     return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
     const [userId, setUserId] = useState(0)

     return (<LoginContext.Provider value={[userId, setUserId]}>
          {children}
     </LoginContext.Provider>)
}
