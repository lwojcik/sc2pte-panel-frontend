import { Rank } from 'src/components/RankImage/RankImage';
import calculateTierRange from './calculateTierRange';

const ranks = [
  'bronze',
  'silver',
  'gold',
  'platinum',
  'diamond',
  'master',
  'grandmaster',
] as Rank[];

const tiers = [1, 2, 3, 4, undefined];

it('should calculate correct tier ranges for all ranks and division ranks', () => {
  ranks.map(rank =>
    tiers.map(tier =>
      expect(calculateTierRange(rank, tier)).toMatchSnapshot()
    )
  );
});
