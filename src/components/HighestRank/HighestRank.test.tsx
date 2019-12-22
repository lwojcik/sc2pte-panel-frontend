import domRender from 'src/testUtils/domRender';
import HighestRank from './HighestRank';

const testData = {
  className: 'test',
  type: 'solo',
  rank: 'bronze',
};

it('renders correctly', () => {
  domRender(HighestRank, testData);
});
