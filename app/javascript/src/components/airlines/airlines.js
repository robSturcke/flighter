import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airline from './airline';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/airlines.json')
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((data) => console.log('error', data));
  }, [airlines.length]);

  const allAirlines = airlines.map((airline, index) => {
    return (
      <div className="col-md-4 col-sm-6" key={index}>
        <Airline
          key={index}
          name={airline.attributes.name}
          image_url={airline.attributes.image_url}
          slug={airline.attributes.slug}
          average_score={airline.attributes.average_score}
        />
      </div>
    );
  });

  return <>{allAirlines}</>;
};

export default Airlines;
