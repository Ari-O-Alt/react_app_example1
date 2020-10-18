import React from 'react';
import { Link } from 'react-router-dom';

function SingleCard(props) {
  const { src, text, label, path } = props;
  return (
    <React.Fragment>
      <li className='singleCard'>
        <Link className='singleCardLink' to={path}>
          <figure className='pictureWrapper' data-category={label}>
            <img className='singleItemImage' src={src} alt='Trave_image' />
          </figure>
          <div className='singleCardInfo'>
            <h5 className='singleItemText'>{text}</h5>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default SingleCard;
