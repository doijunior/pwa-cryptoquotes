import React, { Component } from 'react';
import MercadoBTCCard from './MercadoBTCCard'
import B2UCard from './B2UCard'
import { Card, Statistic, Icon } from 'semantic-ui-react'
import { observer } from 'mobx-react';
import OpStore from '../stores/OpStore';

const Home = observer(
  class Home extends Component {
    render() {
      return (
        <div>
          <Statistic.Group  widths='two'>
            <Statistic>
              <Statistic.Value>
                <Icon name='shop' />
                {OpStore.lastBuy}
              </Statistic.Value>
              <Statistic.Label>última compra</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                <Icon name='sign out' />
                {OpStore.lastSell}
              </Statistic.Value>
              <Statistic.Label>última venda</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <Card.Group>
            <MercadoBTCCard></MercadoBTCCard>
            <B2UCard></B2UCard>
          </Card.Group>
        </div>
      );
    }
  }
);

export default Home;
