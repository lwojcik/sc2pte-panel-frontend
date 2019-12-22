import domRender from 'src/testUtils/domRender';
import TotalGames from './TotalGames';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(TotalGames, testData);
});
