import React from 'react';
import ReactDOM from 'react-dom';
import Unauthorized from './Unauthorized';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Unauthorized />, div);
  ReactDOM.unmountComponentAtNode(div);
});
