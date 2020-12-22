import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Airline from './pages/airline';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Router>
  );
}

export default App;
