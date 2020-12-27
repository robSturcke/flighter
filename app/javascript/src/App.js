import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Airline from './components/airline/airline';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/airlines/:slug" component={Airline} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
