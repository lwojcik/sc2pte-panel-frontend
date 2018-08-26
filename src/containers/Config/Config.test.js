import React from 'react';
import ReactDOM from 'react-dom';
import Config from './Config';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Config />, div);
  ReactDOM.unmountComponentAtNode(div);
});
