import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Review from './review';
import Header from './review_header';
import ReviewForm from './review_form';
import AxiosHelper from '../../utils/requests/axios_helper';

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isOpen, setToggle] = useState(false);
  const [review, setReview] = useState({
    title: '',
    description: '',
    score: 0,
  });
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => setToggle(!isOpen);

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

    const airline_id = parseInt(airline.data.id);
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
      {loaded ? (
        <>
          <div className="review_header">
            <div className="container-fluid">
              <div className="row">
                <Header
                  attributes={airline.data.attributes}
                  reviews={reviews}
                  average={average}
                />
                <div className="col-md-4">
                  <div className="my-3 float-md-right">
                    <Button
                      onClick={handleClick}
                      variant="lg"
                      className={isOpen ? 'review_btn disabled' : 'review_btn'}
                    >
                      {isOpen ? 'Close Review Form' : 'Share a Review!'}
                    </Button>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className={
                      isOpen ? 'review_form_wrap show' : 'review_form_wrap hide'
                    }
                  >
                    <ReviewForm
                      name={airline.data.attributes.name}
                      review={review}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      setRating={setRating}
                      error={error}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            {userReviews ? (
              userReviews
            ) : (
              <div className="row">
                <div className="col">
                  <h3 className="py-3 text-center">
                    No Reviews Yet! Leave a review next time you fly!
                  </h3>
                </div>
              </div>
            )}
          </section>
        </>
      ) : (
        <div className="text-center my-5">
          <Spinner animation="grow" variant="primary" size="lg" />
        </div>
      )}
    </div>
  );
};

export default Airline;
