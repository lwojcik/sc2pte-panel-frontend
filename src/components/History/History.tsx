import React from 'react';
import { MatchObject } from 'src/components/Match/Match';
import NoMatchesPlayed from 'src/components/NoMatchesPlayed/NoMatchesPlayed';
import MatchList from 'src/components/MatchList/MatchList';

interface HistoryProps {
  data: MatchObject[];
}

const History = ({ data }: HistoryProps) => (
  <>
    {data.length <= 0 && <NoMatchesPlayed />}
    {data.length > 0 && <MatchList data={data} />}
  </>
);

export default History;
