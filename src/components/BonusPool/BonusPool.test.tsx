import React from 'react';
import ReactDOM from 'react-dom';
import BonusPool from './BonusPool';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BonusPool count={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
