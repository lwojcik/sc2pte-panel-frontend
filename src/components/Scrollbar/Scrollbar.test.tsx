import domRender from 'utils/domRender';
import Scrollbar from './Scrollbar';

const testData = {
  visible: true,
};

it('renders correctly', () => {
  domRender(Scrollbar, testData);
});
