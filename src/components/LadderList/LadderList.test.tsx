import domRender from 'utils/domRender';
import LadderList from './LadderList';

const testData = {
  data: [
    {
      mode: '1v1',
      rank: 'silver',
      wins: 101,
      losses: 100,
      race: 'random',
      mmr: 3655,
      divisionRank: 3,
      teamMembers: [ 'player' ],
    },
    {
      mode: '2v2',
      rank: 'silver',
      wins: 101,
      losses: 100,
      race: 'terran',
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
  domRender(LadderList, testData);
});
