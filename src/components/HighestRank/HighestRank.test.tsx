import React from 'react';
import { render } from '@testing-library/react';
import HighestRank from './HighestRank';

it('renders correctly', () => {
  render(
    <HighestRank
      type='solo'
      rank='bronze'
    />
  );
});
