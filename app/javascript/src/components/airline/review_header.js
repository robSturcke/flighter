import React from 'react';
import Rating from '../rating';

const Header = ({ attributes, reviews, average, ...props }) => {
  const { image_url, name } = attributes;

  return (
    <div className="col-md-8">
      <h1>
        <img className="airline_logo" src={image_url} alt={name} /> {name}
      </h1>
      {reviews.length == 0 ? (
        'No Customer Reveiws Yet'
      ) : (
        <div>
          <strong>{reviews ? reviews.length : 0}</strong> customer reviews
        </div>
      )}
      <div>
        <Rating average_score={average.toFixed(1)} /> <strong>overall</strong>
      </div>
    </div>
  );
};

export default Header;
