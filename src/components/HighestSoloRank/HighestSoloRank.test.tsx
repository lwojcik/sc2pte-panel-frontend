import domRender from 'utils/domRender';
import HighestSoloRank from './HighestSoloRank';

const testData = {
  rank: 'bronze',
};

it('renders correctly', () => {
  domRender(HighestSoloRank, testData);
});
