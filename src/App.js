import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import '../src/styles/Global.scss';
import ItemIcon from './assets/images/7-2-motorcycle-png-clipart.png'
import FireIcon from './assets/images/001-fire.png'
import BookmarkIcon from './assets/images/bookmark-icon.png'
import MoneyIcon from './assets/images/money-icon.png'
import ClockIcon from './assets/images/clock-icon.png'
import WinIcon from './assets/images/win-icon.png'
import BidsIcon from './assets/images/bids-icon.png'
import Footer from './components/Footer';
import Home from './components/Home';
import ItemShowroom from './components/ItemShowroom';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Home /> */}
      <ItemShowroom />
      <Footer />
    </React.Fragment>
  );
}

export default App;
