import React from 'react';
import ReactDOM from 'react-dom';
import Loss from './Loss';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loss count={999} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
