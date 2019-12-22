import domRender from 'src/testUtils/domRender';
import Result from './Result';

const testData = {
  type: 'win',
};

it('renders correctly', () => {
  domRender(Result, testData);
});
