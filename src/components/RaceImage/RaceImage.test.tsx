import React from 'react';
import ReactDOM from 'react-dom';
import RaceImage from './RaceImage';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RaceImage race='terran' />, div);
  ReactDOM.unmountComponentAtNode(div);
});