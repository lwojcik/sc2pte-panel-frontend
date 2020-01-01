import domRender from 'src/testUtils/domRender';
import TotalGamesThisSeason from './TotalGamesThisSeason';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(TotalGamesThisSeason, testData);
});
