import domRender from 'src/testUtils/domRender';
import PortraitImage from './PortraitImage';

const testData = {
  url: 'testUrl',
};

it('renders correctly', () => {
  domRender(PortraitImage, testData);
});
