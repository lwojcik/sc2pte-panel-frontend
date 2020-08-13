import React from 'react';
import { render } from '@testing-library/react';
import Details from './Details';
import { Rank, Race, ResultType, LadderGameMode } from 'types';

const testData = {
  data: {
    snapshot: [
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
    ],
    stats: {
      totalGames: 100,
      highestSoloRank: 'silver' as Rank,
      highestTeamRank: '' as Rank,
      totalRankedGamesThisSeason: 1,
      seasonWinRatio: 50,
      totalCareerGames: 40,
    },
    history: [
      {
        mapName: 'Kairos Junction LE',
        mode: '1v1' as LadderGameMode,
        result: 'win' as ResultType,
        date: 1562164424000,
      },
    ],
  },
};

it('renders correctly', () => {
  render(<Details {...testData} />);
});
