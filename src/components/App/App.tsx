import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';

/* istanbul ignore next */
const Viewer = lazy(() => import('pages/Viewer/Viewer'));
/* istanbul ignore next */
const Config = lazy(() => import('pages/Config/Config'));

const App = () => (
  <Router>
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route
          path='/viewer'
          element={<Viewer />}
        />
        <Route
          path='/config'
          element={<Config />}
        />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
