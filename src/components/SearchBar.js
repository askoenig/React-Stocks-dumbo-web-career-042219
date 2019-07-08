import React, { Component } from 'react'

class SearchBar extends Component {

  state = {
    checkedValue: '',
  }

  handleChange = (e) => {
    this.setState({ checkedValue: e.target.value }, () => {
      if (this.state.checkedValue === 'Alphabetically') {
        this.props.sortAlphabetically()
      } else {
        this.props.sortByPrice()
      }
    })
  }

  handleFilterChange = (e) => {
    this.props.filterStocks(e.target.value)
  } 



  render() {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.state.checkedValue === 'Alphabetically'} onChange={this.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.state.checkedValue === 'Price'} onChange={this.handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}
}


export default SearchBar;
