import React from 'react';
import styles from './BonusPool.module.scss';

interface BonusPoolProps {
  count: number;
}

const BonusPool = ({ count }: BonusPoolProps) => (
  <div className={styles.BonusPool}>
    Bonus pool:<br />
    {count}
  </div>
);

export default BonusPool;
