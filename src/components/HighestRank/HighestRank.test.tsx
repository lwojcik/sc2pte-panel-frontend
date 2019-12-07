import React from 'react';
import ReactDOM from 'react-dom';
import HighestRank from './HighestRank';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <HighestRank
      className='test'
      type='solo'
      rank='bronze'
    />
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
