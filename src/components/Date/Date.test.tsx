import domRender from 'utils/domRender';
import Date from './Date';

const testData = {
  date: 1562164424000,
};

it('renders correctly', () => {
  domRender(Date, testData);
});
