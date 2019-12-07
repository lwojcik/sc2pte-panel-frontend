import React from 'react';
import ReactDOM from 'react-dom';
import HighestTeamRank from './HighestTeamRank';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HighestTeamRank rank='bronze' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
