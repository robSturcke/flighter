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
      <Airline
        key={index}
        name={airline.attributes.name}
        image_url={airline.attributes.image_url}
        slug={airline.attributes.slug}
        average_score={airline.attributes.average_score}
      />
    );
  });

  return <div>{allAirlines}</div>;
};

export default Airlines;
