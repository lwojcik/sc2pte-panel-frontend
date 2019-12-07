import React from 'react';
import ReactDOM from 'react-dom';
import ClanTag from './ClanTag';

it('renders correctly when clan tag is provided', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanTag tag="Test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly when no clan tag is provided', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanTag tag="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});