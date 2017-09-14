import React, { Component } from 'react';
import B2UCard from './components/B2UCard'
import MercadoBTCCard from './components/MercadoBTCCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>

          </div>
        </nav>
        <main>
          <MercadoBTCCard></MercadoBTCCard>
          <B2UCard></B2UCard>
        </main>
      </div>
    );
  }
}


export default App;
