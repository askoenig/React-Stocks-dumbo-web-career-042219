import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterType: ""
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(stockData => this.setState({
        stocks: stockData
      }))
  }

  addStockToPortfolio = (selectedStock) => {
    this.setState({ portfolio: [...this.state.portfolio, selectedStock]})
  }

  removeStockFromPortfolio = (selectedStock) => {
    this.setState({ portfolio: [...this.state.portfolio.filter(stock => stock !== selectedStock)]})

  }

  sortAlphabetically = (event) => {
    this.setState({stocks: this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)})
  }

  sortByPrice = (event) => {
    this.setState({stocks: this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)})
  }

  filterStocks = (type) => {
    
    // this.setState({ stocks: [...this.state.stocks.filter(stock => stock.type === type)]})
    this.setState({ filterType: type})
  }

  render() {
    let stocksCopy = [...this.state.stocks]
    if (this.state.filterType !== ""){ 
      stocksCopy = stocksCopy.filter(stock => {
        return stock.type === this.state.filterType
      })
    }


    return (
      <div>
        <Header/>
        <MainContainer stocks={stocksCopy} addStock={this.addStockToPortfolio} portfolio={this.state.portfolio} removeStock={this.removeStockFromPortfolio} sortAlphabetically={this.sortAlphabetically} sortByPrice={this.sortByPrice} filterStocks={this.filterStocks}/>
      </div>
    );
  }
}

export default App;
