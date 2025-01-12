import { createContext, useState } from "react";

const authContext = new createContext({});

const initialValue = {
  id_user: 0,
  token: ''
}

function AuthProvider(props) {
  const [user, setUser] = useState(initialValue);
  
  return (
    <authContext.Provider value={{ user, setUser }}>
      {props.children}
    </authContext.Provider>
  ) 
}

export { AuthProvider, authContext }