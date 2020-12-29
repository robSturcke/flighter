import React from 'react';

const ReviewForm = (props) => {
  const ratingOverall = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          value={score}
          checked={props.review.score == score}
          name="rating"
          id={`rating-${score}`}
        />
      </>
    );
  });

  return (
    <>
      <form>stuff</form>
    </>
  );
};

export default ReviewForm;
