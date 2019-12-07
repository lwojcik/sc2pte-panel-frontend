import React from 'react';
import ReactDOM from 'react-dom';
import ClanName from './ClanName';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanName name='Test Clan' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
