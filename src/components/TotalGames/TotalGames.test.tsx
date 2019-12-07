import React from 'react';
import ReactDOM from 'react-dom';
import TotalGames from './TotalGames';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TotalGames count={999} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
