import React from 'react'
import axios from 'axios';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import QuotationCard from './QuotationCard'
import cardsStore from '../stores/CardsStore'

// class B2UCard extends React.Component {
//   constructor(props){
//     super(props)
//     extendObservable(this, { low: 0, quote: 0, high: 0, date: '', id: 0 })
//   }
//
//   componentWillMount(){
//     self = this;
//     axios.get("https://www.bitcointoyou.com/API/ticker.aspx")
//       .then(res => {
//         var date = new Date(res.data.ticker.date * 1000);
//         self.low = res.data.ticker.low;
//         self.quote = res.data.ticker.last;
//         self.high = res.data.ticker.high;
//         self.date =  date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
//       })
//       .catch(function(error){
//         console.log(error);
//     });
//   }
//   render(){
//       return (
//         <QuotationCard id="b2u" title="B2U" quote={this.quote}
//           high={this.high} low={this.low} date={this.date}/>
//       )
//   }
// }


const B2UCard = observer(class B2UCard extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    self = this;
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
