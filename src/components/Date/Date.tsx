import React from 'react';
import classnames from 'classnames/bind';
import TimeAgo from 'react-timeago';
import styles from './Date.module.scss';

interface DateProps {
  date: number;
}

const cx = classnames.bind(styles);

const Date = ({ date }: DateProps) => (
  <span className={cx('Date')}>
    <TimeAgo
      date={date}
      minPeriod={60}
    />
  </span>
);

export default Date;
