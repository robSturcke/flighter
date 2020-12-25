import React from 'react';
import { Link } from 'react-router-dom';

const Airline = (props) => {
  return (
    <div>
      <img src={props.image_url} alt={props.name} width="150" />
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <p>{props.average_score}</p>
      </div>
      <Link to={'/airlines/' + props.slug}>View Reviews</Link>
    </div>
  );
};

export default Airline;
