import React from 'react';
import StatLabel from 'components/StatLabel/StatLabel';
import RankImage from 'components/RankImage/RankImage';
import { Rank, GameType } from 'types';

interface HighestRankProps {
  type: GameType;
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
