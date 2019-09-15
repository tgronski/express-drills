import React, {Component} from 'react';
import './App.css';
import List from './composition/list.js';

class App extends Component {
  static  defaultProps ={
    store: {
      lists: [],
      allCards: {},
    }
  };

render(){
  const {store } = this.props


  return (
    <main className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='App-list'>
        {store.lists.map(list =>(
          <List
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id=> store.allCards[id])} 
          
          />
        ))}
      </div>
      
    </main>
  );
}
}
export default App;
