import React from 'react';
import Win from 'src/components/Win/Win';
import Loss from 'src/components/Loss/Loss';
import styles from './WinLoseRatio.module.scss';

interface WinLoseRatioProps {
  wins: number;
  losses: number;
}

const WinLoseRatio = ({ wins, losses }: WinLoseRatioProps) => (
  <span className={styles.WinLoseRatio}>
    <Win count={wins} />
    &nbsp;/&nbsp;
    <Loss count={losses} />
  </span>
);

export default WinLoseRatio;
