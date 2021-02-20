import { combineReducers } from 'redux';
import authReducer from './auth';
// import configReducer from './config';
// import viewerDataReducer from './viewerData';

export default combineReducers({
  auth: authReducer,
  // config: configReducer,
  // viewerData: viewerDataReducer,
});
