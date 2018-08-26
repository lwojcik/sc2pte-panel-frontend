import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../Index/Index';
import Viewer from '../Viewer/Viewer';
import Config from '../Config/Config';

const App = () => (
  <Router>
    <div>
      <Helmet>
        <title>
          StarCraft II Profile Twitch Extension
        </title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/viewer.html" component={Viewer} />
        <Route path="/config.html" component={Config} />
      </Switch>
    </div>
  </Router>
);

export default App;
