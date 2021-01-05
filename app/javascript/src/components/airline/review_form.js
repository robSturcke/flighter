import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Star from '../../images/icons/star';
import StarGrey from '../../images/icons/star_grey';

const RatingBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url('data:image/svg+xml;charset=UTF-8,${StarGrey}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: 0.3s;
  }
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url('data:image/svg+xml;charset=UTF-8,${Star}');
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url('data:image/svg+xml;charset=UTF-8,${Star}');
  }
`;

const ReviewForm = (props) => {
  const ratingOptions = [1, 2, 3, 4, 5].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          required
          type="radio"
          value={score}
          checked={props.review.score == score}
          onChange={props.handleChange}
          name="rating"
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });

  return (
    <div className="review_form">
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Review Title</Form.Label>
          <Form.Control
            required
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
            required
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
          <RatingBox>{ratingOptions}</RatingBox>
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
