import domRender from 'utils/domRender';
import PortraitImage from './PortraitImage';

const testData = {
  url: 'testUrl',
};

it('renders correctly', () => {
  domRender(PortraitImage, testData);
});
