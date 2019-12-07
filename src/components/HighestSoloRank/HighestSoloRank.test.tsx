import React from 'react';
import ReactDOM from 'react-dom';
import HighestSoloRank from './HighestSoloRank';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HighestSoloRank rank='bronze' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
