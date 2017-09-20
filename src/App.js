import React, { Component } from 'react';
import Home from './components/Home';
import Form from './components/FormOp';
import './App.css';
import { Menu, Container } from 'semantic-ui-react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import OpStore from './stores/OpStore';
import db from './db';


class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentWillMount(){
    db.ops.where("id").equals(1).first().then( (ops) =>{
      OpStore.lastBuy = ops.lastBuy;
      OpStore.lastSell = ops.lastSell;
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu>
            <Menu.Item
              name='home'
              active={this.state.activeItem === 'home'}
              content='Home'
             as={NavLink} exact to='/'
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='buy'
              active={this.state.activeItem === 'buy'}
               as={NavLink} exact to='/buy'
              content='Compra'
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='sell'
              active={this.state.activeItem === 'sell'}
              content='Venda'
             as={NavLink} exact to='/sell'
              onClick={this.handleItemClick}
            />
          </Menu>
          <Container>
            <Route exact path="/" component={Home}/>
            <Route exact path="/buy" component={(props) => (<Form type="Buy" />)}/>
            <Route exact path="/sell" component={(props) => (<Form type="Sell" />)}/>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
