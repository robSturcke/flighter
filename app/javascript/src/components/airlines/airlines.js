import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airline from './airline';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('/api/v1/airlines.json')
      .then((resp) => {
        setAirlines(resp.data.data);
        setLoaded(true);
      })
      .catch((data) => console.log('error', data));
  }, [airlines.length]);

  const allAirlines = airlines.map((airline, index) => {
    return (
      <div className="col-md-4 col-sm-6" key={index}>
        <Airline
          key={index}
          average_score={airline.attributes.avg_score}
          name={airline.attributes.name}
          image_url={airline.attributes.image_url}
          slug={airline.attributes.slug}
        />
      </div>
    );
  });

  return <>{loaded && allAirlines}</>;
};

export default Airlines;
