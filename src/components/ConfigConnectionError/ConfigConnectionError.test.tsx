import React from 'react';
import ReactDOM from 'react-dom';
import ConfigConnectionError from './ConfigConnectionError';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConfigConnectionError />, div);
  ReactDOM.unmountComponentAtNode(div);
});
