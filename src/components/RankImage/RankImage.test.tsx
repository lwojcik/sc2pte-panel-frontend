import domRender from 'utils/domRender';
import RankImage from './RankImage';

const testData = {
  rank: 'silver',
};

it('renders correctly', () => {
  domRender(RankImage, testData);
});
