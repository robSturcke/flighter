import React from 'react';

const Review = ({ attributes, ...props }) => {
  const { title, description, score } = attributes;

  return (
    <div className="col-md-12">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{score}</p>
    </div>
  );
};

export default Review;
