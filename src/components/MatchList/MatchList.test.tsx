import domRender from 'src/testUtils/domRender';
import MatchList from './MatchList';

const testData = {
  data: [
    {
      mapName: 'Test Map Name 1 LE',
      mode: '1v1',
      result: 'win',
      date: 1562164424000,
    },
    {
      mapName: 'Test Map Name 2 LE',
      mode: '1v1',
      result: 'loss',
      date: 1562164424000,
    },
  ],
};

it('renders correctly', () => {
  domRender(MatchList, testData);
});
