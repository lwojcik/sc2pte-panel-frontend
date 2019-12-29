import React from 'react';
import classnames from 'classnames/bind';
import calculateWinRatio from 'src/helpers/calculateWinRatio/calculateWinRatio';
import styles from './WinLoseBar.module.scss';

interface WinLoseBarProps {
  wins: number;
  losses: number;
}

const cx = classnames.bind(styles);

const WinLoseBar = ({ wins, losses }: WinLoseBarProps) => {
  const [winPercentage, lossPercentage] = calculateWinRatio(wins, losses);

  return (
    <div className={cx('WinLoseBar')}>
      <div className={cx('wins')} style={{ width: `${winPercentage}%`}} />
      <div className={cx('losses')} style={{ width: `${lossPercentage}%`}} />
    </div>
  );
};

export default WinLoseBar;
