import React from 'react';
import TotalGames from 'src/components/TotalGames/TotalGames';

interface TotalGamesThisSeasonProps {
  count: number;
}

const TotalGamesThisSeason = ({ count }: TotalGamesThisSeasonProps) => (
  <TotalGames
    label='Total&nbsp;games this&nbsp;season'
    count={count}
  />
);

export default TotalGamesThisSeason;
