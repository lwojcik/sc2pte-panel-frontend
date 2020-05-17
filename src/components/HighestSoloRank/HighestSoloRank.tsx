import React from 'react';
import HighestRank from 'components/HighestRank/HighestRank';
import { Rank } from 'types';

interface HighestSoloRankProps {
  rank: Rank;
}

const HighestSoloRank = ({ rank }: HighestSoloRankProps) => (
  <HighestRank
    type='solo'
    rank={rank}
  />
);

export default HighestSoloRank;
