import domRender from 'utils/domRender';
import TotalRankedSeasonGames from './TotalRankedSeasonGames';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(TotalRankedSeasonGames, testData);
});
