import React from 'react';

const Header = ({ attributes, reviews, average, ...props }) => {
  const { image_url, name } = attributes;

  return (
    <>
      <h1>
        <img src={image_url} width="175" alt={name} /> {name}
      </h1>
      {reviews.length == 0 ? (
        'No Customer Reveiws Yet'
      ) : (
        <div>{reviews ? reviews.length : 0} customer reviews</div>
      )}
      <div>{average.toFixed(1)} out of 5 stars</div>
    </>
  );
};

export default Header;
