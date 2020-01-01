import domRender from 'src/testUtils/domRender';
import StatCount from './StatCount';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(StatCount, testData);
});
