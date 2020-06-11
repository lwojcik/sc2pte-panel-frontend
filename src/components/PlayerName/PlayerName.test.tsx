import domRender from 'utils/domRender';
import PlayerName from './PlayerName';

const testData = {
  name: 'Test',
};

it('renders correctly', () => {
  domRender(PlayerName, testData);
});
