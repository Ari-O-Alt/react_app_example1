import React from 'react';
import { Link } from 'react-router-dom';

function SingleCard() {
  return (
    <React.Fragment>
      <li className='singleCard'>
        <Link className='singleCardLink'>
          <figure className='pictureWrapper'>
            <img className='singleItemImage' src='#' alt='Trave_image' />
          </figure>
          <div className='singleCardInfo'>
            <h5 className='singleItemText'>Example</h5>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default SingleCard;
