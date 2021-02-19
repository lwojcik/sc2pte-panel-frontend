import calculateRankTier from './calculateRankTier';
import { Rank } from 'types';

const ranks = [
  'bronze',
  'silver',
  'gold',
  'platinum',
  'diamond',
  'master',
  'grandmaster',
] as Rank[];

const divisionRanks = [1, 3, 6, 10, 20, 26, 40, 51, 72, 99, 101, 125, 174, 200, 202];

it('should return 4 when no division rank is provided', () => {
  ranks.map(rank => expect(calculateRankTier(rank)).toBe(4));
});

it('should return correct tier for all ranks and division ranks', () => {
  ranks.map(rank =>
    divisionRanks.map(divisionRank =>
      expect(calculateRankTier(rank, divisionRank)).toMatchSnapshot()
    )
  );
});
