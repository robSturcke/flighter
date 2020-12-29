import React from 'react';
import Airlines from '../components/airlines/airlines';
import Banner from '../images/main/banner';
import LowerBanner from '../images/main/lower_banner';

const Home = () => (
  <>
    <div className="container-fluid">
      <div className="airlines">
        <div className="hero_banner">
          <Banner />
        </div>
        <div className="row">
          <Airlines />
        </div>
        <div className="lower_banner mb-5">
          <LowerBanner />
        </div>
      </div>
    </div>
  </>
);

export default Home;
