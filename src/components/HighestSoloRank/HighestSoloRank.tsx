import React from 'react';
import HighestRank from 'src/components/HighestRank/HighestRank';
import { Rank } from 'src/components/RankImage/RankImage';
// import styles from './HighestSoloRank.module.scss';

interface HighestSoloRankProps {
  className?: string;
  rank: Rank;
}

const HighestSoloRank = ({ className, rank }: HighestSoloRankProps) => (
  <HighestRank className={className} type='solo' rank={rank} />
);

export default HighestSoloRank;
