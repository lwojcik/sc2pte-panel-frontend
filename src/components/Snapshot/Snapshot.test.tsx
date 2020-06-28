import React from 'react';
import { render } from '@testing-library/react';
import Snapshot from './Snapshot';
import { LadderGameMode, Rank, Race } from 'types';

const testData = {
  data: [
    {
      mode: '1v1' as LadderGameMode,
      rank: 'silver' as Rank,
      wins: 101,
      losses: 100,
      race: 'random' as Race,
      mmr: 3655,
      divisionRank: 3,
      teamMembers: [ 'player' ],
    },
    {
      mode: '2v2' as LadderGameMode,
      rank: 'silver' as Rank,
      wins: 101,
      losses: 100,
      race: 'terran' as Race,
      mmr: 3655,
      divisionRank: 3,
      teamMembers: [
        'player1',
        'player2',
      ],
    },
  ],
};

it('renders correctly', () => {
  render(<Snapshot {...testData} />);
});
