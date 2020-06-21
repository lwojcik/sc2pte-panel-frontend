import domRender from 'utils/domRender';
import SeasonWinRatio from './SeasonWinRatio';

const testData = {
  count: 40,
};

it('renders correctly', () => {
  domRender(SeasonWinRatio, testData);
});
