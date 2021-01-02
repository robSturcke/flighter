import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div
    className={selected ? 'review-star selected' : 'review-star'}
    onClick={onClick}
  />
);

const StarRating = ({ totalStars }) => {
  const [score, selectStar] = useState(0);

  return (
    <div className="review_rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          value={score}
          selected={i < score}
          onClick={() => selectStar(i + 1)}
        />
      ))}
      <p className="text-muted pt-2">
        {score} of {totalStars} stars
      </p>
    </div>
  );
};

const ReviewForm = (props, { score }) => {
  return (
    <div className="review_form">
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
            as="textarea"
            rows="3"
            name="description"
            placeholder="Your review's description"
            value={props.review.description}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="score">
          <Form.Label>Your Rating</Form.Label>
          <StarRating
            totalStars={5}
            onClick={props.setRating.bind(this, score)}
            value={score}
          />
        </Form.Group>
        <div className="float-right mb-5">
          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </div>
        {props.error && <p>{props.error}</p>}
      </Form>
    </div>
  );
};

export default ReviewForm;
