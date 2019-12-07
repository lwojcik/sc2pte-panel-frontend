import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen/LoadingScreen';

const Index = lazy(() => import('src/pages/Index/Index'));
const Viewer = lazy(() => import('src/pages/Viewer/Viewer'));
const Config = lazy(() => import('src/pages/Config/Config'));

const App = () => (
  <Router>
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/viewer' component={Viewer} />
        <Route path='/config' component={Config} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
