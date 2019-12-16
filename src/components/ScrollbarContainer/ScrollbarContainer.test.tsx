import React from 'react';
import ReactDOM from 'react-dom';
import Flag from './Flag';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flag code='eu' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
