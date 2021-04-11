import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import '../src/styles/Global.scss';
import Footer from './components/Footer';
import Home from './components/Home';
import ItemShowroom from './components/ItemShowroom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item-showroom">
          <ItemShowroom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
