import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './review';
import Header from './review_header';

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({
    title: '',
    description: '',
    score: 0,
  });
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;

    axios
      .get(`/api/v1/airlines/${slug}`)
      .then((resp) => {
        setAirline(resp.data);
        setReviews(resp.data.included);
        setLoaded(true);
      })
      .catch((data) => console.log('Error', data));
  }, []);

  const handleChange = (e) => {
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  let total,
    average = 0;
  let userReviews;

  if (reviews && reviews.length > 0) {
    total = reviews.reduce(
      (total, review) => total + review.attributes.score,
      0
    );
    average = total > 0 ? parseFloat(total) / parseFloat(reviews.length) : 0;

    userReviews = reviews.map((review, index) => {
      return (
        <Review key={index} id={review.id} attributes={review.attributes} />
      );
    });
  }

  return (
    <div className="container-fluid">
      {loaded && (
        <>
          <Header
            attributes={airline.data.attributes}
            reviews={reviews}
            average={average}
          />
          <div className="row">
            {userReviews ? userReviews : 'No Reviews Yet'}
          </div>
        </>
      )}
    </div>
  );
};

export default Airline;
