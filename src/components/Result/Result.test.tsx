import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Result type='win' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
