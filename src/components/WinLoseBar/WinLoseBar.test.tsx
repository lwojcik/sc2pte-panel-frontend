import domRender from 'utils/domRender';
import WinLoseBar from './WinLoseBar';

const testData = {
  wins: 999,
  losses: 999,
};

it('renders correctly', () => {
  domRender(WinLoseBar, testData);
});
