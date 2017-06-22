import React from 'react'
import axios from 'axios';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import QuotationCard from './QuotationCard'
import cardsStore from '../stores/CardsStore'
//import Blinktrade from 'blinktrade'

const FoxbitCard = observer(class FoxbitCard extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    self = this;
    axios.get("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC")
      .then(res => {
        console.log(res.data);
        // var date = new Date(res.data.date * 1000);
        // cardsStore["foxbit"].id = "Foxit";
        // cardsStore["foxbit"].low = res.data.low;
        // cardsStore["foxbit"].quote = res.data.last;
        // cardsStore["foxbit"].high = res.data.high;
        // cardsStore["foxbit"].date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      })
      .catch(function(error){
        console.log(error);
    });
  }
  render(){
      return (
        <QuotationCard id="foxbit"/>
      )
  }
});


export default FoxbitCard;
