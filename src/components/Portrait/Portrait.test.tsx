import React from 'react';
import ReactDOM from 'react-dom';
import Portrait from './Portrait';
import { Rank } from 'src/components/RankImage/RankImage';

const testObject = {
  url: 'sampleUrl',
  frame: 'silver' as Rank,
}

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portrait portrait={testObject} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
