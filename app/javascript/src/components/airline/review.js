import React from 'react';
import Rating from '../rating';

const Review = ({ attributes }) => {
  const { title, description, score } = attributes;

  return (
    <article>
      <div className="review my-3">
        <div className="row">
          <div className="col-md-8">
            <header>
              <h1>{title}</h1>
            </header>
          </div>
          <div className="col-md-4">
            <span className="float-md-right">
              <Rating average_score={score} />
            </span>
          </div>
          <div className="col-md-8">
            <div className="review_body">
              <p>{description}</p>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </article>
  );
};

export default Review;
