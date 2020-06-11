import domRender from 'utils/domRender';
import Portrait from './Portrait';

const testData = {
  portrait: {
    url: 'sampleUrl',
    frame: 'silver',
  }
};

it('renders correctly', () => {
  domRender(Portrait, testData);
});
