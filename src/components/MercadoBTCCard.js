import React from 'react'
import axios from 'axios';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import QuotationCard from './QuotationCard'
import cardsStore from '../stores/CardsStore'

const MercadoBTCCard = observer(class MercadoBTCCard extends React.Component {
  constructor(props){
    super(props)
    extendObservable(this, { date: '', id: 0 })
  }

  componentWillMount(){
    self = this;
    axios.get("https://www.mercadobitcoin.net/api/ticker/")
    .then(res => {
      var date = new Date(res.data.ticker.date * 1000);
      cardsStore["mercado"].id = "Mercado Bitcoin";
      cardsStore["mercado"].low = res.data.ticker.low;
      cardsStore["mercado"].quote = res.data.ticker.last;
      cardsStore["mercado"].high = res.data.ticker.high;
      cardsStore["mercado"].date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    })
    .catch(function(error){
      console.log(error);
    });
  }
  render(){
    return (
      <QuotationCard id="mercado"/>
    )
  }
});


export default MercadoBTCCard;
