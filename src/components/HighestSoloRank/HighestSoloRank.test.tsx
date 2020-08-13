import React from 'react';
import { render } from '@testing-library/react';
import HighestSoloRank from './HighestSoloRank';

it('renders correctly', () => {
  render(<HighestSoloRank rank='bronze' />);
});
