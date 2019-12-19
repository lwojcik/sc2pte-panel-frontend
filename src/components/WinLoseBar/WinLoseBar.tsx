import React from 'react';
import classnames from 'classnames/bind';
import styles from './WinLoseBar.module.scss';

interface WinLoseBarProps {
  wins: number;
  losses: number;
}

const cx = classnames.bind(styles);

const WinLoseBar = ({ wins, losses }: WinLoseBarProps) => (
  <div className={cx('WinLoseBar')}>
    WINLOSEBAR {wins} {losses}
  </div>
);

export default WinLoseBar;