import { Rank, Tier } from 'types';

const calculateTierRange = (rank: Rank, tier?: Tier) => {
  const percentages = [100, 8, 25, 50, 100];
  const multiplier = rank === 'grandmaster' ? 2 : 1;
  return !tier
    ? percentages[0]
    : percentages[tier] * multiplier;
};

export default calculateTierRange;
