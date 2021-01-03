import React from 'react';
import Rating from '../rating';

const Header = ({ attributes, reviews, average, ...props }) => {
  const { image_url, name } = attributes;

  return (
    <div className="review_header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>
              <img className="airline_logo" src={image_url} alt={name} /> {name}
            </h1>
            {reviews.length == 0 ? (
              'No Customer Reveiws Yet'
            ) : (
              <div>{reviews ? reviews.length : 0} customer reviews</div>
            )}
            <div>
              <Rating average_score={average.toFixed(1)} /> overall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
