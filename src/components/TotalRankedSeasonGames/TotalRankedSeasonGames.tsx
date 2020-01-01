import React from 'react';
import TotalGames from 'src/components/TotalGames/TotalGames';

interface TotalRankedSeasonGamesProps {
  count: number;
}

const TotalRankedSeasonGames = ({ count }: TotalRankedSeasonGamesProps) => (
  <TotalGames
    label='Ranked&nbsp;games this&nbsp;season'
    count={count}
  />
);

export default TotalRankedSeasonGames;
