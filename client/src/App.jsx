import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  useEffect(() => {
    fetch('/api/music')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
    </div>
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" component={Home} />
    //   </Switch>
    // </BrowserRouter>
  );
};

export default App;

// MAKE SURE TO INSTALL 'react-router-dom' AND THEN TURN THE "App.jsx" INTO YOUR ROUTER
