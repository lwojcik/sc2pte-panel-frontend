import domRender from 'utils/domRender';
import MapName from './MapName';

const testData = {
  name: 'Test',
};

it('renders correctly', () => {
  domRender(MapName, testData);
});
