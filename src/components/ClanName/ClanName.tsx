import React from 'react';
import styles from './ClanName.module.scss';

interface ClanNameProps {
  name: string;
}

const ClanName = ({ name }: ClanNameProps) => (
  <div className={styles.ClanName}>
    {name}
  </div>
);

export default ClanName;