import React, { useState, useEffect } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import axios from 'axios';
import Review from './review';
import Header from './review_header';
import ReviewForm from './review_form';
import AxiosHelper from '../../utils/requests/axios_helper';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    AxiosHelper();

    const airline_id = parseInt(ariline.data.id);
    axios
      .post('/api/v1/reviews', { ...review, airline_id })
      .then((resp) => {
        setReviews([...reviews, resp.data.data]);
        setReview({ title: '', description: '', score: 0 });
        setError('');
      })
      .catch((resp) => {
        let error;
        switch (resp.message) {
          case 'Request failed with status code 401':
            error = 'Please log in to leave a review.';
            break;
          default:
            error = 'Something went wrong.';
        }
        setError(error);
      });
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
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <Accordion>
                    <div className="my-3">
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey="0"
                        size="lg"
                      >
                        Share a Review!
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="0">
                      <ReviewForm
                        name={airline.data.attributes.name}
                        review={review}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        setRating={setRating}
                        error={error}
                      />
                    </Accordion.Collapse>
                  </Accordion>
                </div>
              </div>
              <div className="row">
                {userReviews
                  ? userReviews
                  : 'No Reviews Yet! Leave a review next time you fly!'}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Airline;
