import React from 'react';
import { render } from '@testing-library/react';
import SeasonWinRatio from './SeasonWinRatio';

it('renders correctly', () => {
  render(<SeasonWinRatio count={40} />);
});
