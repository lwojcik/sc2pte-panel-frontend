import domRender from 'src/testUtils/domRender';
import Flag from './Flag';

const testData = {
  code: 'eu',
};

it('renders correctly', () => {
  domRender(Flag, testData);
});
