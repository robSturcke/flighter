import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
        <label onClick={props.setRating.bind(this, score)} />
      </>
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
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Review description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Your review's description"
            value={props.review.description}
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
