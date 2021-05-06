import React from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, persistor } from './redux/index';
import { PersistGate } from 'redux-persist/integration/react';
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
import BidPackCheckoutForm from './components/BidPackCheckoutForm';
import ItemCheckoutForm from './components/ItemCheckoutForm';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/">
        <PersistGate persistor={persistor}>
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
            <Route exact path="/account-dashboard">
              <AdminHome />
            </Route>
            <Route exact path="/stripe-checkout-mobile/:token_id/:bid_points">
              <BidPackCheckoutForm />
            </Route>
            <Route exact path="/item-checkout-mobile/:stripe_payment_intent_id">
              <ItemCheckoutForm />
            </Route>
          </Switch>
        </PersistGate>
      </Router>
    </Provider>
  );
}

export default App;
