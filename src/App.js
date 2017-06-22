import React, { Component } from 'react';
import B2UCard from './components/B2UCard'
import FoxbitCard from './components/FoxbitCard'
import MercadoBTCCard from './components/MercadoBTCCard'
import axios from 'axios';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import './App.css';

const Page = () => (
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

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}


export default App;
