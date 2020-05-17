import domRender from 'utils/domRender';
import TotalGamesThisSeason from './TotalGamesThisSeason';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(TotalGamesThisSeason, testData);
});
