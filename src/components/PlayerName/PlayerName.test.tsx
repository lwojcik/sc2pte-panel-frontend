import React from 'react';
import ReactDOM from 'react-dom';
import PlayerName from './PlayerName';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerName name="Test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});