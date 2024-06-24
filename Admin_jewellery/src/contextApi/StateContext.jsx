import React, { createContext, useState, useContext, useEffect } from 'react';
import { handleIsLogin } from './api'
// Create the context
const StateContext = createContext();

// Provider component
const StateProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // checkk is login 
  const checkIsLogin = () => {
    console.log(handleIsLogin());
  };

  useEffect(() => {
    checkIsLogin()
  },[])


  return (
    <StateContext.Provider value={{ data, isLoading }}>
      {children}
    </StateContext.Provider>
  );
};


const useStateContext = () => {
  return useContext(StateContext);
};

export { StateProvider, useStateContext }; 
