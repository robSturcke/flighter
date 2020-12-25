import React from 'react';

const ReviewHeader = ({ attributes, reviews, average, ...props }) => {
  const { image_url, name } = attributes;

  return (
    <>
      <h1>
        <img src={image_url} height="75" width="75" alt={name} /> {name}
      </h1>
      <div>{reviews ? reviews.length : 0} customer reviews</div>
      <div>{average.toFixed(1)} out of 5 stars</div>
    </>
  );
};

export default ReviewHeader;
