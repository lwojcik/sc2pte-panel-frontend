import React from 'react';
import HighestRank from 'src/components/HighestRank/HighestRank';
import { Rank } from 'src/components/RankImage/RankImage';

interface HighestSoloRankProps {
  rank: Rank;
}

const HighestSoloRank = ({ rank }: HighestSoloRankProps) => (
  <HighestRank type='solo' rank={rank} />
);

export default HighestSoloRank;
