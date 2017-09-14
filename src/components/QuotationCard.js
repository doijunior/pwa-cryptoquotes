import React from 'react'
import { observer } from 'mobx-react';
import cardsStore from '../stores/CardsStore'

const QuotationCard = observer(
  class QuotationCard extends React.Component {
    render(){
      return (
        <div className="card positive" id="{props.id}">
          <div className="card-content">
            <p className="title">{cardsStore[this.props.id].id}</p>
            <p className="subtitle">{cardsStore[this.props.id].date}</p>
            <div className="content">
              <p className="last"><span className="typcn typcn-chart-line-outline"></span>R$ {cardsStore[this.props.id].quote}</p>
              <div className="columns">
                <div className="small column high"><span className="typcn typcn-arrow-up-thick"></span>R$ {cardsStore[this.props.id].high}</div>
                <div className="small column low"><span className="typcn typcn-arrow-down-thick"></span>R$ {cardsStore[this.props.id].low}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);


export default QuotationCard;
