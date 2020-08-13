import React from 'react';
import { render } from '@testing-library/react';
import TotalGames from './TotalGames';

it('renders correctly', () => {
  render(
    <TotalGames
      label='Test label'
      count={999}
    />
  );
});
