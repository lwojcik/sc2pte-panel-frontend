import React from 'react';
import HighestRank from 'components/HighestRank/HighestRank';
import { Rank } from 'types';

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
