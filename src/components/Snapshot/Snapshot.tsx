import React from 'react';
import useToggle from 'src/hooks/useToggle/useToggle';
import ScrollbarContainer from 'src/components/ScrollbarContainer/ScrollbarContainer'
import Ladder, { LadderObject } from 'src/components/Ladder/Ladder';
import styles from './Snapshot.module.scss';

interface SnapshotProps {
  data: LadderObject[];
}

const Snapshot = ({ data }: SnapshotProps) => {
  const { state, toggleState } = useToggle(false);
  
  return (
    <div
      className={styles.Snapshot}
      onMouseEnter={toggleState}
      onMouseLeave={toggleState}
      onTouchStartCapture={toggleState}
      onTouchEndCapture={toggleState}
    >
      <ScrollbarContainer visible={state}>
        <>
          {data.map((ladder, key) => <Ladder key={key} ladder={ladder} />)}
        </>
      </ScrollbarContainer>
    </div>
  );
}

export default Snapshot;