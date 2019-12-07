import React from 'react';
import ReactDOM from 'react-dom';
import AddProfileButton from './AddProfileButton';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddProfileButton onClick={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
