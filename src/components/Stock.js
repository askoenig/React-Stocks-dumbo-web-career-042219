import React, { Component } from 'react'

class Stock extends Component {

  

  handleClick = () => {
    console.log(this.props.stock)
    this.props.clickStock(this.props.stock)
  }

  render() {
    

    return (
      <div>
  
    <div className="card">
      <div onClick={this.handleClick} className="card-body">
        <h5 className="card-title">{this.props.stock.name}</h5>
        <p className="card-text">{this.props.stock.ticker}</p>
      </div>
    </div>


  </div>
    )
  }
};

export default Stock
