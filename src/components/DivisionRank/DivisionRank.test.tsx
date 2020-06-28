import React from 'react';
import { render } from '@testing-library/react';
import DivisionRank from './DivisionRank';

it('renders correctly', () => {
  render(<DivisionRank rank={1} />);
});
