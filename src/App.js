import React from 'react';
import './App.css';


const App = () => {
  const APP_KEY = 'X1-ZWz1hm2z4ieoej_7kib9';
  const exampleReq = `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${APP_KEY}`;
  
  return(
    <div className="AppHeader">
      <header>
        <div className="header-top-row">
          <div className="top-left-menu">
            <ul>
              <li>Buy</li>
              <li>Rent</li>
              <li>Sell</li>
              <li>Home Loans</li>
              <li>Agent Finder</li>
            </ul>
          </div>

          <div className="site-icon">
            Meep!
          </div>

          <div className="top-right-menu">
            <ul>
              <li>Manage Rentals</li>
              <li>Advertise</li>
              <li>My Zillow</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <div class="header-bottom-row">
          <form>
            <input className="bottom-item" type="text" />
            <button className="bottom-item" type="button">For Sale</button>
            <button className="bottom-item" type="button">Price</button>
          </form>
          <aside>24 Saved Homes</aside>
        </div>
      </header>
    </div>
  );
};

export default App;
