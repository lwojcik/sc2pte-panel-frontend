import React from 'react';
import { render } from '@testing-library/react';
import TotalCareerGames from './TotalCareerGames';

it('renders correctly', () => {
  render(<TotalCareerGames count={999} />);
});
