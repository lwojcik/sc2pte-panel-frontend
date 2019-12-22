import domRender from 'src/testUtils/domRender';
import DeleteProfileButton from './DeleteProfileButton';

const testData = {
  onClick: () => null,
};

it('renders correctly', () => {
  domRender(DeleteProfileButton, testData);
});
