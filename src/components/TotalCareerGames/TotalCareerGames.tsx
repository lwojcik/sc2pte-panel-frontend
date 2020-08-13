import React from 'react';
import TotalGames from 'components/TotalGames/TotalGames';

interface TotalCareerGamesProps {
  count: number;
}

const TotalCareerGames = ({ count }: TotalCareerGamesProps) => (
  <TotalGames
    label='Total career games'
    count={count}
  />
);

export default TotalCareerGames;
