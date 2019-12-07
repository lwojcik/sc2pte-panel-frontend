import React from 'react';
import ReactDOM from 'react-dom';
import Details from './Details';
import { Rank } from 'src/components/RankImage/RankImage'
import { Race } from 'src/components/RaceImage/RaceImage';
import { ResultType } from 'src/components/Result/Result';

const testObject = {
  snapshot: [
    {
      mode: "1v1",
      rank: "silver" as Rank,
      wins: 101,
      losses: 100,
      race: "random" as Race,
      mmr: 3655,
      divisionRank: 3,
    },
  ],
  stats: {
    totalGames: 100,
    bonusPool: 24,
    highestSoloRank: "silver" as Rank,
    highestTeamRank: "" as Rank,
  },
  history: [
    {
      mapName: "Kairos Junction LE",
      mode: "1v1",
      result: "win" as ResultType,
      date: 1562164424000,
    },
  ],
};

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Details data={testObject} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
