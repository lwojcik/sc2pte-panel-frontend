import domRender from 'src/testUtils/domRender';
import GenericButton from './GenericButton';

const testData = {
  onClick: () => null,
  className: 'testClassName',
};

it('renders correctly', () => {
  domRender(GenericButton, testData);
});
