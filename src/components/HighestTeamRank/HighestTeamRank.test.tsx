import domRender from 'utils/domRender';
import HighestTeamRank from './HighestTeamRank';

const testData = {
  rank: 'bronze',
};

it('renders correctly', () => {
  domRender(HighestTeamRank, testData);
});
