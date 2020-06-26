import React from 'react';
import TotalGames from 'components/TotalGames/TotalGames';

interface SeasonWinRatioProps {
  count: number;
}

const SeasonWinRatio = ({ count }: SeasonWinRatioProps) => (
  <TotalGames
    label='Season win&#x2011;ratio'
    count={`${count}%`}
  />
);

export default SeasonWinRatio;
