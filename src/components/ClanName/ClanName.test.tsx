import domRender from 'utils/domRender';
import ClanName from './ClanName';

const testData = {
  name: 'Test Clan',
};

it('renders correctly', () => {
  domRender(ClanName, testData);
});
