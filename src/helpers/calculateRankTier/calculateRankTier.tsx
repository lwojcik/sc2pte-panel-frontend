const calculateRankTier = (divisionRank?: number) => {
  if (!divisionRank) return 3;
  if (divisionRank <= 8) return 1;
  if (divisionRank > 8 && divisionRank <= 25) return 2;
  return 3;
};

export default calculateRankTier;
