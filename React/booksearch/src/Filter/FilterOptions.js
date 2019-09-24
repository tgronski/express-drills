import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input type="radio" value="All" id="filter_all" name="filter" checked={filterOption ==="ebooks"}   onChange={e => this.props.handleFilterChange(e.target.value)}/>
          All E-Books
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_free-ebook">
            <input type="radio" value="Free E-Book" id="ebook" name="filter" checked={filterOption ==="free-ebooks"} onChange={e => this.props.handleFilterChange(e.target.value)}/>
          Free E-Book
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_paid">
            <input type="radio" value="Paid Ebook" id="paid" name="filter" checked={filterOption ==="paid-ebooks"} onChange={e => this.props.handleFilterChange(e.target.value)}/>
          Paid E-Book
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_full">
            <input type="radio" value="Full Book" id="full" name="filter" checked={filterOption ==="full"} onChange={e => this.props.handleFilterChange(e.target.value)}/>
          Full Book
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;


