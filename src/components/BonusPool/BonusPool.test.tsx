import domRender from 'src/testUtils/domRender';
import BonusPool from './BonusPool';

const testData = {
  count: 1,
};

it('renders correctly', () => {
  domRender(BonusPool, testData);
});
