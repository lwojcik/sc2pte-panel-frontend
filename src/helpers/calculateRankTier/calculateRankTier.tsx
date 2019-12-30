import { Rank, Tier } from 'src/components/RankImage/RankImage';

const calculateRankTier = (rank: Rank, divisionRank?: number): Tier => {
  if (!divisionRank) return 4;
  if (rank === 'grandmaster') {
    if (divisionRank <= 16) return 1;
    if (divisionRank > 16 && divisionRank <= 50) return 2;
    if (divisionRank > 50 && divisionRank <= 100) return 3;
    return 4;
  }
  if (divisionRank <= 8) return 1;
  if (divisionRank > 8 && divisionRank <= 25) return 2;
  if (divisionRank > 25 && divisionRank <= 50) return 3;
  return 4;
};

export default calculateRankTier;
