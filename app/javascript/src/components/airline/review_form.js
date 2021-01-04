import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = (props) => {
  const ratingOptions = [1, 2, 3, 4, 5].map((score, index) => {
    return (
      <div className="rating" key={index}>
        <input
          type="radio"
          value={score}
          checked={props.review.score == score}
          onChange={props.handleChange}
          name="rating"
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </div>
    );
  });

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
          <div>{ratingOptions}</div>
        </Form.Group>
        <div className="float-right mb-5">
          <Button variant="primary" type="submit" onClick={props.handleSubmit}>
            Submit Review
          </Button>
        </div>
        {props.error && <p>{props.error}</p>}
      </Form>
    </div>
  );
};

export default ReviewForm;
