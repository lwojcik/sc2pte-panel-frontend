import domRender from 'utils/domRender';
import Loss from './Loss';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(Loss, testData);
});
