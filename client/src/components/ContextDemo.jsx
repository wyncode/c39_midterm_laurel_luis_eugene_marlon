import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// REMOVE LINE 2, and REMOVE THE IMPORT OF "useContext"

const ContextDemo = () => {
  const { contextMessage, contextMethod } = useContext(AppContext);

  contextMethod();

  return <h3>{contextMessage}</h3>;
};

export default ContextDemo;

// DELETE THIS FILE OR CHANGE THE COMPONENT THAT IS MADE (WHICH MEANS YOU NEED TO CHANGE THE FILE NAME ALSO)
