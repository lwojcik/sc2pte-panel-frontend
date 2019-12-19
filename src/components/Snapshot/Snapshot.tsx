import React from 'react';
import HoverableScrollArea from 'src/components/HoverableScrollArea/HoverableScrollArea';
import Ladder, { LadderObject } from 'src/components/Ladder/Ladder';

interface SnapshotProps {
  data: LadderObject[];
}

const Snapshot = ({ data }: SnapshotProps) => (
  <HoverableScrollArea>
    <>
      {data.map((ladder, key) => (
        <Ladder key={key} ladder={ladder} />
      ))}
    </>
  </HoverableScrollArea>
);

export default Snapshot;