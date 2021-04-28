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
import ItemHighlight from './components/ItemHighlight';
import AdminHome from './components/AdminControl/AdminHome';
import CheckoutForm from './components/CheckoutForm';

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
        <Route exact path="/item-highlight">
          <ItemHighlight />
        </Route>
        <Route exact path="/administrator-account-dashboard">
          <AdminHome />
        </Route>
        <Route exact path="/stripe-checkout-mobile/:token_id/:bid_points">
          <CheckoutForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
