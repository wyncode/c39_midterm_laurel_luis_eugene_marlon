import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import AboutUs from './components/AboutUs';
import AlbumPage from './components/AlbumPage';
import WelcomePage from './components/WelcomePage';

// Add Universal Footer with Wyncode's information. + Finish making the Nav universal to every page. 

const ByrdSong = () => {

  return (

  <BrowserRouter>
  <NavMenu />
  <Switch>
  <Route exact path="/" component={WelcomePage} />
  <Route exact path="/aboutus" component={AboutUs} />
  <Route exact path="/albumpage/:id" component={AlbumPage} />
  </Switch>
  </BrowserRouter>

  );
};

export default ByrdSong;