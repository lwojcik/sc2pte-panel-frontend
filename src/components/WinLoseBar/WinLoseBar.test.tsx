import React from 'react';
import { render } from '@testing-library/react';
import WinLoseBar from './WinLoseBar';

it('renders correctly', () => {
  render(
    <WinLoseBar
      wins={999}
      losses={999}
    />
  );
});
