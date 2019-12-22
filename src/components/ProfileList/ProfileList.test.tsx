import domRender from 'src/testUtils/domRender';
import AddProfileButton from 'src/components/AddProfileButton/AddProfileButton';

const testData = {
  onClick: () => null,
};

it('renders correctly', () => {
  domRender(AddProfileButton, testData);
});
