import React from 'react';
import './list.css';
import Card from './card.js'

function List(props){
    return (
    <div class="App-list">
    <section class="List">
      <header class="List-header">
        <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
          <button type="button" class="List-add-button">
            + Add Random Card
          </button>
      </div>
    </section>
  </div>
  );
}

export default List;