import React from 'react';
import ReactDOM from 'react-dom';
import RefreshPageButton from './RefreshPageButton';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RefreshPageButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
