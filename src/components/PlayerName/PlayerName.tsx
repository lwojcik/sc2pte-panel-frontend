import React from 'react';
import styles from './PlayerName.module.scss';

interface PlayerNameProps {
  name: string;
}

const PlayerName = ({ name }: PlayerNameProps) => (
  <span className={styles.PlayerName}>
    {name}
  </span>
);

export default PlayerName;
