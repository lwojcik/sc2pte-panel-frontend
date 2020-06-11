import domRender from 'utils/domRender';
import Details from './Details';
import { Race } from 'components/RaceImage/RaceImage';
import { Rank, ResultType } from 'types';

const testData = {
  data: {
    snapshot: [
      {
        mode: '1v1',
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
      bonusPool: 24,
      highestSoloRank: 'silver' as Rank,
      highestTeamRank: '' as Rank,
    },
    history: [
      {
        mapName: 'Kairos Junction LE',
        mode: '1v1',
        result: 'win' as ResultType,
        date: 1562164424000,
      },
    ],
  },
};

it('renders correctly', () => {
  domRender(Details, testData);
});
