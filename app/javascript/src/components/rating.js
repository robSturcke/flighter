import React from 'react';

const Rating = (props) => {
  const score = (props.average_score / 5) * 100;

  return (
    <span className="star_wrap">
      <span className="stars" style={{ width: score + '%' }} />
    </span>
  );
};

export default Rating;
