import React from 'react';
import SingleCard from './SingleCard';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our destinations</h1>
      <div className='cardsContainer'>
        <div className='cardsWrapper'>
          <ul className='allCards'>
            <SingleCard />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
