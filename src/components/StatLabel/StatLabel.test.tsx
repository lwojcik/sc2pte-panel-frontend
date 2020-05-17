import domRender from 'utils/domRender';
import StatLabel from './StatLabel';

const testData = {
  children: 'Test',
};

it('renders correctly', () => {
  domRender(StatLabel, testData);
});
