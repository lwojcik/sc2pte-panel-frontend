import domRender from 'utils/domRender';
import Flag from './Flag';

const testData = {
  code: 'eu',
};

it('renders correctly', () => {
  domRender(Flag, testData);
});
