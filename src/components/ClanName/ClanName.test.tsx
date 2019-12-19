import domRender from 'src/testUtils/domRender';
import ClanName from './ClanName';

const testData = {
  name: 'Test Clan',
};

it('renders correctly', () => {
  domRender(ClanName, testData);
});
