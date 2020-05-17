import React from 'react';
import Match from 'components/Match/Match';
import HoverableScrollArea from 'components/HoverableScrollArea/HoverableScrollArea';
import { MatchObject } from 'types';

interface MatchListProps {
  data: MatchObject[];
}

const MatchList = ({ data }: MatchListProps) => (
  <HoverableScrollArea>
    <>
      {data.map((match, key) => (
        <Match
          key={key}
          match={match}
        />
      ))}
    </>
  </HoverableScrollArea>
);

export default MatchList;
