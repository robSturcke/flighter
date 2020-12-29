import React from 'react';

const Review = ({ attributes, ...props }) => {
  const { title, description, score } = attributes;

  return (
    <div className="col-md-12">
      <article>
        <div className="card">
          <div className="card-title">
            <header>
              <h1>
                {title} <span className="float-right">{score}</span>
              </h1>
            </header>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Review;
