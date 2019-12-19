import domRender from 'src/testUtils/domRender';
import AddProfileButton from './AddProfileButton';

const testData = {
  onClick: () => null,
};

it('renders correctly', () => {
  domRender(AddProfileButton, testData);
});
