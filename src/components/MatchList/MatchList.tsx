import React from 'react';
import Match, { MatchObject } from 'src/components/Match/Match';
import HoverableScrollArea from 'src/components/HoverableScrollArea/HoverableScrollArea';

interface MatchListProps {
  data: MatchObject[];
}

const MatchList = ({ data }: MatchListProps) => (
  <HoverableScrollArea>
    <>
      {data.map((match, key) => (
        <Match key={key} match={match} />
      ))}
    </>
  </HoverableScrollArea>
);

export default MatchList;
