import domRender from 'utils/domRender';
import Win from './Win';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(Win, testData);
});
