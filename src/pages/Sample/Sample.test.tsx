import domRender from 'src/testUtils/domRender';
import Sample from './Sample';

it('renders without crashing', () => {
  domRender(Sample);
});
