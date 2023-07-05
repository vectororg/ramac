import React, { useContext, useEffect, useState } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [pending, setPending] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {    
    const getSignedInState = () => {
      const authorization = localStorage.getItem("authorization");

      if (authorization == null) {
        setSignedIn(false);
        setPending(false);
        return;
      }

      fetch('https://nr.vector.fi:1891/ramac/rest/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authorization,
        },
      })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setSignedIn(true);
        setPending(false);
      })
      .catch(error => {
        setSignedIn(false);
        setPending(false);
      })   
    }
  
    getSignedInState();    
  }, [])

  const logout = () => {
    setSignedIn(false)
  }
  
  const login = (data) => {
    setUser(data);
    setSignedIn(true)
  }

  return (
    <AuthContext.Provider value={{
      signedIn,
      user,
      login,
      logout
    }}>
      {pending ?
        <h3>Loading...</h3>
        :
        children
      }
    </AuthContext.Provider>
  )
}