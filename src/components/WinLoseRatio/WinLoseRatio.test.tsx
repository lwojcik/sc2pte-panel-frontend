import React from 'react';
import ReactDOM from 'react-dom';
import WinLoseRatio from './WinLoseRatio';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WinLoseRatio wins={1} losses={2} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
