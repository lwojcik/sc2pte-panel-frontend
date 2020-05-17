import React from 'react';
import NoMatchesPlayed from 'components/NoMatchesPlayed/NoMatchesPlayed';
import MatchList from 'components/MatchList/MatchList';
import { MatchObject } from 'types';

interface HistoryProps {
  data: MatchObject[];
}

const History = ({ data }: HistoryProps) => (
  <>
    {data.length <= 0 && (
      <NoMatchesPlayed />
    )}
    {data.length > 0 && (
      <MatchList data={data} />
    )}
  </>
);

export default History;
