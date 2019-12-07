import React from 'react';
import styles from './Loss.module.scss';

interface LossProps {
  count: number;
}

const Loss = ({ count }: LossProps) => (
  <span className={styles.Loss}>
    {count}
  </span>
);

export default Loss;