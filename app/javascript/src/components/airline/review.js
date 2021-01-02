import React from 'react';
import Rating from '../rating';

const Review = ({ attributes }) => {
  const { title, description, score } = attributes;

  return (
    <div className="col-md-12 my-3">
      <article>
        <div className="review">
          <div className="review_title">
            <header>
              <h1>
                {title}
                <span className="float-right">
                  <Rating average_score={score} />
                </span>
              </h1>
            </header>
          </div>
          <div className="review_body">
            <p>{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Review;
