import domRender from 'src/testUtils/domRender';
import PlayerName from './PlayerName';

const testData = {
  name: 'Test',
};

it('renders correctly', () => {
  domRender(PlayerName, testData);
});
