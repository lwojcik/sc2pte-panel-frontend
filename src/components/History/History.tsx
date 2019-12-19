import React from 'react';
import Match, { MatchObject } from 'src/components/Match/Match';
import HoverableScrollArea from 'src/components/HoverableScrollArea/HoverableScrollArea';

interface HistoryProps {
  data: MatchObject[];
}

const History = ({ data }: HistoryProps) => (
  <HoverableScrollArea>
    <>
      {data.map((match, key) => (
        <Match key={key} match={match} />
      ))}
    </>
  </HoverableScrollArea>
);

export default History;