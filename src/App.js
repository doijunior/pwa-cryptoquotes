import React, { Component } from 'react';
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
    <B2UCard></B2UCard>
  </main>
  </div>
);

const QuotationCard = (props) => (
  <div className="card positive" id="{props.id}">
    <div className="card-content">
      <p className="title">{props.title}</p>
      <p className="subtitle">{props.date}</p>
      <div className="content">
        <p className="last"><span className="typcn typcn-chart-line-outline"></span>R$ {props.quote}</p>
        <div className="columns">
          <div className="small column high"><span className="typcn typcn-arrow-up-thick"></span>R$ {props.high}</div>
          <div className="small column low"><span className="typcn typcn-arrow-down-thick"></span>R$ {props.low}</div>
        </div>
      </div>
    </div>
  </div>
);

const B2UCard = observer(
  class B2UCard extends React.Component {
    constructor(props){
      super(props)
    }

    componentWillMount(){
      self = this;
      axios.get("https://www.bitcointoyou.com/API/ticker.aspx")
        .then(res => {
          var date = new Date(res.data.ticker.date * 1000);
          self.low = res.data.ticker.low;
          self.quote = res.data.ticker.last;
          self.high = res.data.ticker.high;
          self.date =  date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
          self.setState({});
        })
        .catch(function(error){
          console.log(error);
      });
    }
    render(){
        return (
          <QuotationCard id="b2u" title="B2U" quote={this.quote}
            high={this.high} low={this.low} date={this.date}/>
        )
    }
  }
)


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
