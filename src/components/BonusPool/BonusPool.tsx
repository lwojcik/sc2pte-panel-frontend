import React from 'react';
import styles from './BonusPool.module.scss';

interface BonusPoolProps {
  count: number;
}

const BonusPool = ({ count }: BonusPoolProps) => (
  <span className={styles.BonusPool}>
    {count}
  </span>
);

export default BonusPool;
