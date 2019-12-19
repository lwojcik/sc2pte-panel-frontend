import React from 'react';
import ReactDOM from 'react-dom';
import Snapshot from './Snapshot';
import { LadderObject } from 'src/components/Ladder/Ladder';

const testData = [
  {
    mode: '1v1',
    rank: 'silver',
    wins: 101,
    losses: 100,
    race: 'random',
    mmr: 3655,
    divisionRank: 3,
  },
  {
    mode: '2v2',
    rank: 'silver',
    wins: 101,
    losses: 100,
    race: 'terran',
    mmr: 3655,
    divisionRank: 3,
  },
] as LadderObject[];

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Snapshot data={testData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
