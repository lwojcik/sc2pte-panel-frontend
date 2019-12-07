import React from 'react';
import TimeAgo from 'react-timeago';
import styles from './Date.module.scss';

interface DateProps {
  date: number;
}

const Date = ({ date }: DateProps) => (
  <span className={styles.Date}>
    <TimeAgo date={date} minPeriod={60} />
  </span>
);

export default Date;