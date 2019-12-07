import React from 'react';
import ReactDOM from 'react-dom';
import DeleteProfileButton from './DeleteProfileButton';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeleteProfileButton onClick={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
