import React from 'react';
import classnames from 'classnames/bind';
import RankImage, { Rank } from 'src/components/RankImage/RankImage';
import styles from './HighestRank.module.scss';

interface HighestRankProps {
  className?: string;
  type: 'solo' | 'team';
  rank: Rank;
}

const cx = classnames.bind(styles);

const HighestRank = ({ className, type, rank }: HighestRankProps) => (
  <span className={cx('HighestRank', className)}>
    Highest {type} rank:<br/>
    <RankImage rank={rank} />
  </span>
);

export default HighestRank;