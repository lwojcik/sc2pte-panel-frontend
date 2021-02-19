import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import LoadingScreen from 'components/LoadingScreen/LoadingScreen';

/* istanbul ignore next */
const Viewer = lazy(() => import('pages/Viewer/Viewer'));
/* istanbul ignore next */
const Config = lazy(() => import('pages/Config/Config'));

const LoadingScreen = () => (
  <div>Loading</div>
);

const App = () => (
  <Router>
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route
          path='/viewer'
          component={Viewer}
        />
        <Route
          path='/config'
          component={Config}
        />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
