import domRender from 'utils/domRender';
import StatCount from './StatCount';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(StatCount, testData);
});
