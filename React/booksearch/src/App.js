import React, { Component } from 'react';
import './App.css';
import SearchBar from './Search/SearchBar';
import FilterableList from './Filter/FilterableList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'The Book of Why',
      filterOption: 'ebooks',
      files: []
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }
  componentDidMount() {
    const filtertype=(this.state.filterOption)
    const term=(this.state.searchTerm)
    const yourAPIKey='AIzaSyD71h7IhYg0wWulOSb8h_rCJVzIqjjUuzE'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=${filtertype}&key=${yourAPIKey}`;
    const options = {
      method: 'GET',
      headers: {
        // Add your key after Bearer
        "Authorization": "Bearer AIzaSyD71h7IhYg0wWulOSb8h_rCJVzIqjjUuzE",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res.json();
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchTerm: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  render() {
    return (
      <div className="App">
      
        <SearchBar
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption}
        handleUpdate={term=>this.updateSearchTerm(term)}
        handleFilterChange={option => this.updateFilterOption(option)}/>
        <FilterableList files={this.props.files} searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOptions}/>
      </div>
    );
  }
}

export default App;


