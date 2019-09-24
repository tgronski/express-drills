import React, { Component } from 'react';
import './SearchBox.css';


class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
      <input
        placeholder="Search term"
        value={this.props.searchTerm}
        onChange={e => this.props.handleUpdate(e.target.value)}/>      
      </div>   
    );
  }
}

export default SearchBox;