import React from 'react';
import classnames from 'classnames/bind';
import StatLabel from 'src/components/StatLabel/StatLabel';
import RankImage, { Rank } from 'src/components/RankImage/RankImage';
import styles from './HighestRank.module.scss';

interface HighestRankProps {
  className?: string;
  type: 'solo' | 'team';
  rank: Rank;
}

const cx = classnames.bind(styles);

const HighestRank = ({ className, type, rank }: HighestRankProps) => (
  <div className={cx('HighestRank', className)}>
    <StatLabel>
      Highest {type} rank:
    </StatLabel>
    <RankImage rank={rank} />
  </div>
);

export default HighestRank;
