import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen/LoadingScreen';

/* istanbul ignore next */
// const Index = lazy(() => import('src/pages/Index/Index'));
/* istanbul ignore next */
const Viewer = lazy(() => import('src/pages/Viewer/Viewer'));
/* istanbul ignore next */
const Config = lazy(() => import('src/pages/Config/Config'));
/* istanbul ignore next */
const Sample = lazy(() => import('src/pages/Sample/Sample'));

const App = () => (
  <Router>
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {/* <Route exact path='/' component={Index} /> */}
        <Route
          exact
          path='/'
          component={Sample}
        />
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
