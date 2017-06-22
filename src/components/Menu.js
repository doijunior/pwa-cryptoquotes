import React from 'react'
import axios from 'axios';
import { observer } from 'mobx-react';

const Menu = observer(
  class Menu extends React.Component{
    constructor(props){
      super(props)
    }

    componentWillMount(){
      self = this;
      axios.get("https://api.github.com/users/doijunior/repos")
        .then(res => {
          self.high = res.data.ticker.high;
        })
        .catch(function(error){
          console.log(error);
      });
    }
    render(){
        return (
          <ul>
            <li>{this.}</li>
          </ul>
        )
    }




  }

)
