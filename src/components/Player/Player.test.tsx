import domRender from 'utils/domRender';
import Player from './Player';

const testData = {
  player: {
    clan: {
      name: 'testClan',
      tag: 'testTag',
    },
    name: 'testName',
    server: 'eu',
  },
};

it('renders correctly', () => {
  domRender(Player, testData);
});
