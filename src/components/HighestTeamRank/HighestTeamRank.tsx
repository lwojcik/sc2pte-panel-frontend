import React from 'react';
import HighestRank from 'src/components/HighestRank/HighestRank';
import { Rank } from 'src/components/RankImage/RankImage';

interface HighestSoloRankProps {
  rank: Rank;
}

const HighestTeamRank = ({ rank }: HighestSoloRankProps) => (
  <HighestRank
    type='team'
    rank={rank}
  />
);

export default HighestTeamRank;
