import React from 'react';
import classnames from 'classnames/bind';
import styles from './StatCount.module.scss';

interface StatCountProps {
  children: number | string;
}

const cx = classnames.bind(styles);

const StatCount = ({ children }: StatCountProps) => (
  <div className={cx('StatCount')}>
    {children}
  </div>
);

export default StatCount;
