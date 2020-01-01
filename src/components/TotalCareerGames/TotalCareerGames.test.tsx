import domRender from 'src/testUtils/domRender';
import TotalCareerGames from './TotalCareerGames';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(TotalCareerGames, testData);
});
