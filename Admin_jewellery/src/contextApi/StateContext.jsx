import React, { createContext, useState, useContext } from 'react';

// Create the context
const StateContext = createContext();

// Provider component
const StateProvider = ({ children }) => {
  const [data, setData] = useState({});


  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <StateContext.Provider value={{ data, updateData }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to consume the context
const useStateContext = () => {
  return useContext(StateContext);
};

export { StateProvider, useStateContext }; 
