import domRender from 'utils/domRender';
import TotalCareerGames from './TotalCareerGames';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(TotalCareerGames, testData);
});
