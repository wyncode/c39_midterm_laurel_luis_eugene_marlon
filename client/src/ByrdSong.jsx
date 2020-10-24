import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import AboutUs from './components/AboutUs';
import WelcomePage from './components/WelcomePage';

const ByrdSong = () => {
  useEffect(() => {
    fetch('/top50artists')
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, []);
  return (
    <div>
  <BrowserRouter>
  <NavMenu />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/AboutUs" component={AboutUs} />
  </BrowserRouter>
  </div>
  );
};

export default ByrdSong;