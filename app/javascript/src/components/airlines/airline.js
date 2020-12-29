import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Airline = (props) => {
  return (
    <div className="card">
      <div className="text-center">
        <img className="airline_logo" src={props.image_url} alt={props.name} />
        <div className="py-3">
          <h2>{props.name}</h2>
        </div>
        <Link to={'/airlines/' + props.slug}>
          <Button variant="primary" size="lg" block>
            View Reviews
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Airline;
