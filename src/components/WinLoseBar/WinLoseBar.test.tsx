import React from 'react';
import ReactDOM from 'react-dom';
import Win from './Win';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Win count={999} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
