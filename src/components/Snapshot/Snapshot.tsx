import React from 'react';
import NoLaddersFound from 'src/components/NoLaddersFound/NoLaddersFound';
import LadderList from 'src/components/LadderList/LadderList';
import { LadderObject } from 'src/components/Ladder/Ladder';

interface SnapshotProps {
  data: LadderObject[];
}

const Snapshot = ({ data }: SnapshotProps) => (
  <>
    {data.length <= 0 && (
      <NoLaddersFound />
    )}
    {data.length > 0 && (
      <LadderList data={data} />
    )}
  </>
);

export default Snapshot;
