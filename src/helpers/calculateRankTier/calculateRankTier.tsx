import { Rank, Tier } from 'src/components/RankImage/RankImage';

const calculateRankTier = (rank: Rank, divisionRank?: number): Tier => {
  const multiplier = rank === 'grandmaster' ? 2 : 1;
  if (!divisionRank) return 4;
  if (divisionRank <= 8 * multiplier) return 1;
  if (divisionRank <= 25 * multiplier) return 2;
  if (divisionRank <= 50 * multiplier) return 3;
  return 4;
};

export default calculateRankTier;
