import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {





  render() {
    return (
      <div>
        <SearchBar sortAlphabetically={this.props.sortAlphabetically} sortByPrice={this.props.sortByPrice} filterStocks={this.props.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} clickStock={this.props.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.props.portfolio} clickStock={this.props.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
