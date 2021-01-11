import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import Airline from './components/airline/airline';
import Layout from './components/layout';
import LoginRegister from './pages/login';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/login" component={LoginRegister} />
          <Route exact path="/airlines/:slug" component={Airline} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
