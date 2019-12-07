import React from 'react';
import Ladder, { LadderObject } from 'src/components/Ladder/Ladder';
import styles from './Snapshot.module.scss';

interface SnapshotProps {
  data: LadderObject[];
}

const Snapshot = ({ data }: SnapshotProps) => (
  <div className={styles.Snapshot}>
    {data.map((ladder, key) => <Ladder key={key} ladder={ladder} />)}
  </div>
);

export default Snapshot;