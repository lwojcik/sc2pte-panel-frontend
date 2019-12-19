import React from 'react';
import ReactDOM from 'react-dom';
import PortraitFrame from './PortraitFrame';
import { Rank } from 'src/components/RankImage/RankImage';

const ranks = [
  '',
  'bronze',
  'silver',
  'gold',
  'platinum',
  'master',
  'grandmaster',
] as Rank[];

const testObject = {
  rank: 'silver' as Rank,
  children: <p>TestElement</p>,
};

it('renders correctly for all ranks', () => {
  const div = document.createElement('div');
  ranks.map(rank => ReactDOM.render((
    <PortraitFrame rank={rank}>
      {testObject.children}
    </PortraitFrame>
  ), div));
  ReactDOM.unmountComponentAtNode(div);
});
