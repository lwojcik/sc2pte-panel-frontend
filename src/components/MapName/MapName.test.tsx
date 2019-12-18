import React from 'react';
import ReactDOM from 'react-dom';
import MapName from './MapName';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapName name='Test' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
