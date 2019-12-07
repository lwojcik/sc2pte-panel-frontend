import React from 'react';
import ReactDOM from 'react-dom';
import RankImage from './RankImage';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RankImage rank="silver" />, div);
  ReactDOM.unmountComponentAtNode(div);
});