import React from 'react'
import { observer } from 'mobx-react';
import cardsStore from '../stores/CardsStore'
import { Card, Grid } from 'semantic-ui-react'

const QuotationCard = observer(
  class QuotationCard extends React.Component {
    render(){
      return (
        <Card id="{props.id}" fluid color='green'>
          <Card.Content>
            <Card.Header>{cardsStore[this.props.id].id}</Card.Header>
            <Card.Meta>{cardsStore[this.props.id].date}</Card.Meta>
            <Card.Description>
              <p className="last"><span className="typcn typcn-chart-line-outline"></span>R$ {cardsStore[this.props.id].quote}</p>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <span className="typcn typcn-arrow-up-thick"></span>R$ {cardsStore[this.props.id].high}
                  </Grid.Column>
                  <Grid.Column>
                    <span className="typcn typcn-arrow-down-thick"></span>R$ {cardsStore[this.props.id].low}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
      );
    }
  }
);


export default QuotationCard;
