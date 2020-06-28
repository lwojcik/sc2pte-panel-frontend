import React from 'react';
import { render } from '@testing-library/react';
import TotalRankedSeasonGames from './TotalRankedSeasonGames';

it('renders correctly', () => {
  render(<TotalRankedSeasonGames count={999} />);
});
