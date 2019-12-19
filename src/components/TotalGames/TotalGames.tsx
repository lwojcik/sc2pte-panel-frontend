import React from 'react';
import styles from './TotalGames.module.scss';

interface TotalGamesProps {
  count: number;
}

const TotalGames = ({ count }: TotalGamesProps) => (
  <span className={styles.TotalGames}>
    {count}
  </span>
);

export default TotalGames;
