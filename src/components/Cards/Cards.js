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
            <SingleCard src={'/images/img-1.jpg'} text={'Explore the hidden waterfall'} label={'Adventure'} path='/services' />
            <SingleCard src={'/images/img-2.jpg'} text={'Explore the hidden waterfall'} label={'Adventure'} path='/services' />
          </ul>
          <ul className='allCards'>
            <SingleCard src={'/images/img-3.jpg'} text={'Explore the hidden waterfall'} label={'Adventure'} path='/services' />
            <SingleCard src={'/images/img-4.jpg'} text={'Explore the hidden waterfall'} label={'Adventure'} path='/services' />
            <SingleCard src={'/images/img-5.jpg'} text={'Explore the hidden waterfall'} label={'Adventure'} path='/services' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
