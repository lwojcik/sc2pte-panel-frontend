import { combineReducers } from 'redux';
import twitchAuthReducer from './twitchAuth';
// import configReducer from './config';
// import viewerDataReducer from './viewerData';

export default combineReducers({
  auth: twitchAuthReducer,
  // config: configReducer,
  // viewerData: viewerDataReducer,
});
