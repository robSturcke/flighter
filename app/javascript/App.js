import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import AirlineReviews from './pages/airline_reviews';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/airlines/:slug" component={AirlineReviews} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
