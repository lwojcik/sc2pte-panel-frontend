import React from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from './Scrollbar';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scrollbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
