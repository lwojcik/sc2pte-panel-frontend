import React from 'react';
import ReactDOM from 'react-dom';
import WinLoseBar from './WinLoseBar';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WinLoseBar wins={999} losses={999} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
