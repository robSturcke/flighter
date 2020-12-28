import React from 'react';
import Airlines from '../components/airlines/airlines';

const Home = () => (
  <>
    <div className="container-fluid">
      <div className="airlines">
        <div className="row">
          <Airlines />
        </div>
      </div>
    </div>
  </>
);

export default Home;
