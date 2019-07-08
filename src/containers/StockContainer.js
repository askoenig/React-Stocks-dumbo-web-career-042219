import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  

  render() {

    const allStocks = this.props.stocks.map(stock => <Stock stock={stock} clickStock={this.props.clickStock}/>)

    return (
      <div>
        <h2>Stocks</h2>
        {allStocks}
      </div>
    );
  }

}

export default StockContainer;
