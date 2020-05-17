import React from 'react';
import HoverableScrollArea from 'components/HoverableScrollArea/HoverableScrollArea';
import Ladder from 'components/Ladder/Ladder';
import { LadderObject } from 'types';

interface SnapshotProps {
  data: LadderObject[];
}

const LadderList = ({ data }: SnapshotProps) => (
  <HoverableScrollArea>
    <>
      {data.map((ladder, key) => (
        <Ladder
          key={key}
          ladder={ladder}
        />
      ))}
    </>
  </HoverableScrollArea>
);

export default LadderList;
