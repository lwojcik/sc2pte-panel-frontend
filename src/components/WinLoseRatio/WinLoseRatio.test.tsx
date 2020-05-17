import domRender from 'utils/domRender';
import WinLoseRatio from './WinLoseRatio';

const testData = {
  wins: 1,
  losses: 2,
};

it('renders correctly', () => {
  domRender(WinLoseRatio, testData);
});
