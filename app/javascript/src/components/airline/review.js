import React from 'react';

const Review = ({ attributes, ...props }) => {
  const { title, description, score } = attributes;

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-title">
          <h1>
            {title} <span className="float-right">{score}</span>
          </h1>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
