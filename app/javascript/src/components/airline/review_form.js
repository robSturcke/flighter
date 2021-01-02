import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = (props, { value }) => {
  const [rating, setRating] = useState(parseInt(value) || 0);
  const [selection, setSelection] = useState(0);

  const ratings = [5, 4, 3, 2, 1];

  const handleHover = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('star-id')) {
      val = event.target.getAttribute('star-id');
    }
    setSelection(val);
  };

  const ratingOverall = ratings.map((score, index) => {
    return (
      <span key={index}>
        <span star-id={score} className="rating">
          <input
            type="radio"
            value={score}
            checked={props.review.score == score}
            onChange={() => console.log('onChange')}
            onClick={(e) =>
              setRating(e.target.getAttribute('star-id') || rating)
            }
            onMouseOver={handleHover}
            name="rating"
            id={`rating-${score}`}
          />
          <label onClick={props.setRating.bind(this, score)}></label>
        </span>
      </span>
    );
  });

  return (
    <>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Review Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Your review title"
            value={props.review.title}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Review description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Your review's description"
            value={props.review.description}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">{ratingOverall}</Form.Group>
        <Button variant="primary" type="submit">
          Submit Review
        </Button>
        {props.error && <p>{props.error}</p>}
      </Form>
    </>
  );
};

export default ReviewForm;
