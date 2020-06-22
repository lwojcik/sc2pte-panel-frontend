import React from 'react';
import NoLaddersFound from 'components/NoLaddersFound/NoLaddersFound';
import LadderList from 'components/LadderList/LadderList';
import { LadderObject } from 'types';

interface SnapshotProps {
  data: LadderObject[];
}

const Snapshot = ({ data }: SnapshotProps) => (
  <>
    {(!data || data?.length <= 0) && (
      <NoLaddersFound />
    )}
    {data?.length > 0 && (
      <LadderList data={data} />
    )}
  </>
);

export default Snapshot;
