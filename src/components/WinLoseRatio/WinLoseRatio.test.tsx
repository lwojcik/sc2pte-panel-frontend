import React from 'react';
import { render } from '@testing-library/react';
import WinLoseRatio from './WinLoseRatio';

it('renders correctly', () => {
  render(
    <WinLoseRatio
      wins={1}
      losses={2}
    />
  );
});
