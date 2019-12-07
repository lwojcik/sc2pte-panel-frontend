import React from 'react';
import ReactDOM from 'react-dom';
import Date from './Date';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Date date={1562164424000} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
