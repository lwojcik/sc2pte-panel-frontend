import domRender from 'src/testUtils/domRender';
import MapName from './MapName';

const testData = {
  name: 'Test',
};

it('renders correctly', () => {
  domRender(MapName, testData);
});
