import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  

  render() {

    const allStocks = this.props.stocks.map(stock => <Stock stock={stock} clickStock={this.props.clickStock}/>)

    return (
      <div>
        <h2>My Portfolio</h2>
          {allStocks}
      </div>
    );
  }

}

export default PortfolioContainer;
