import domRender from 'utils/domRender';
import DragDropIcon from './DragDropIcon';

const testData = {
  disabled: false,
};

it('renders correctly', () => {
  domRender(DragDropIcon, testData);
});
