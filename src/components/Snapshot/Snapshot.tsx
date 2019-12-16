import React from 'react';
import ScrollbarContainer from 'src/components/ScrollbarContainer/ScrollbarContainer'
import Ladder, { LadderObject } from 'src/components/Ladder/Ladder';
import styles from './Snapshot.module.scss';

interface SnapshotProps {
  data: LadderObject[];
}

const Snapshot = ({ data }: SnapshotProps) => (
  <div className={styles.Snapshot}>
    <ScrollbarContainer>
      <>
        {data.map((ladder, key) => <Ladder key={key} ladder={ladder} />)}
      </>
    </ScrollbarContainer>
  </div>
);

export default Snapshot;