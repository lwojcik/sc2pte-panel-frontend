import calculateRankTier from './calculateRankTier';
import {
  ranks,
  divisionRanks,
} from 'testObjects';

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
