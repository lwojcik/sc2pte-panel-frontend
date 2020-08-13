import React from 'react';
import classnames from 'classnames/bind';
import styles from './DivisionRank.module.scss';

interface LadderProps {
  rank: number;
}

const cx = classnames.bind(styles);

const DivisionRank = ({ rank }: LadderProps) => (
  <span className={cx('DivisionRank')}>
    Rank: {rank}
  </span>
);

export default DivisionRank;
