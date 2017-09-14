import React from 'react'
import axios from 'axios';
import { observer } from 'mobx-react';
import QuotationCard from './QuotationCard'
import cardsStore from '../stores/CardsStore'

const B2UCard = observer(class B2UCard extends React.Component {
  componentWillMount(){
    axios.get("https://www.bitcointoyou.com/API/ticker.aspx")
      .then(res => {
        var date = new Date(res.data.ticker.date * 1000);
        cardsStore["b2u"].id = "B2U";
        cardsStore["b2u"].low = res.data.ticker.low;
        cardsStore["b2u"].quote = res.data.ticker.last;
        cardsStore["b2u"].high = res.data.ticker.high;
        cardsStore["b2u"].date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      })
      .catch(function(error){
        console.log(error);
    });
  }
  render(){
      return (
        <QuotationCard id="b2u"/>
      )
  }
});


export default B2UCard;
