import domRender from 'src/testUtils/domRender';
import SampleConfig from './SampleConfig';

it('renders without crashing', () => {
  domRender(SampleConfig);
});
