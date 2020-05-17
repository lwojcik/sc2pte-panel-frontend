import domRender from 'utils/domRender';
import AddProfileButton from 'components/AddProfileButton/AddProfileButton';

const testData = {
  onClick: () => null,
};

it('renders correctly', () => {
  domRender(AddProfileButton, testData);
});
