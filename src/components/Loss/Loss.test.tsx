import domRender from 'src/testUtils/domRender';
import Loss from './Loss';

const testData = {
  count: 999,
};

it('renders correctly', () => {
  domRender(Loss, testData);
});
