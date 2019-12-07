import React from 'react';
import ReactDOM from 'react-dom';
import LoadingScreen from './LoadingScreen';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
