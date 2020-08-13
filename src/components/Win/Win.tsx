import React from 'react';
import styles from './Win.module.scss';

interface WinProps {
  count: number;
}

const Win = ({ count }: WinProps) => (
  <span className={styles.Win}>
    {count}
  </span>
);

export default Win;
