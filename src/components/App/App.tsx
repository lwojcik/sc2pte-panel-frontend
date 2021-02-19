import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import LoadingScreen from 'components/LoadingScreen/LoadingScreen';
import configureStore from 'store/configureStore';

const store = configureStore();

/* istanbul ignore next */
const Viewer = lazy(() => import('pages/Viewer/Viewer'));
/* istanbul ignore next */
const Config = lazy(() => import('pages/Config/Config'));

const LoadingScreen = () => (
  <div>Loading</div>
);

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
