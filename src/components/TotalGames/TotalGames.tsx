import React from 'react';
import classnames from 'classnames/bind';
import StatLabel from 'components/StatLabel/StatLabel';
import StatCount from 'components/StatCount/StatCount';
import styles from './TotalGames.module.scss';

interface TotalGamesProps {
  label: string;
  count: number;
}

const cx = classnames.bind(styles);

const TotalGames = ({ label, count }: TotalGamesProps) => (
  <div className={cx('TotalGames')}>
    <StatLabel>
      {label}:
    </StatLabel>
    <StatCount>
      {count}
    </StatCount>
  </div>
);

export default TotalGames;
