import domRender from 'src/testUtils/domRender';
import TotalRankedSeasonGames from './TotalRankedSeasonGames';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(TotalRankedSeasonGames, testData);
});
