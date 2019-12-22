import domRender from 'src/testUtils/domRender';
import Win from './Win';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(Win, testData);
});
