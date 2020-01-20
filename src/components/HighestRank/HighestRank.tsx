import React from 'react';
import StatLabel from 'src/components/StatLabel/StatLabel';
import RankImage, { Rank } from 'src/components/RankImage/RankImage';

interface HighestRankProps {
  type: 'solo' | 'team';
  rank: Rank;
}

const HighestRank = ({ type, rank }: HighestRankProps) => (
  <div>
    <StatLabel>
      Highest {type}&nbsp;rank:
    </StatLabel>
    <RankImage rank={rank} />
  </div>
);

export default HighestRank;
