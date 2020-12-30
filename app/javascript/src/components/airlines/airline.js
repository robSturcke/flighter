import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Rating from '../rating';

const Airline = (props) => {
  return (
    <div className="card">
      <div className="text-center">
        <img className="airline_logo" src={props.image_url} alt={props.name} />
        <div className="py-3">
          <h2>{props.name}</h2>
          <Rating average_score={props.average_score} />
        </div>
        <Link to={'/airlines/' + props.slug}>
          <Button size="lg" block>
            View Reviews
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Airline;
