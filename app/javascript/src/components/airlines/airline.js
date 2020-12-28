import React from 'react';
import { Link } from 'react-router-dom';

const Airline = (props) => {
  return (
    <div className="text-center">
      <img className="airline_logo" src={props.image_url} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <p>{props.average_score}</p>
      </div>
      <Link to={'/airlines/' + props.slug}>View Reviews</Link>
    </div>
  );
};

export default Airline;
