import React from 'react';
import { render } from '@testing-library/react';
import HighestTeamRank from './HighestTeamRank';

it('renders correctly', () => {
  render(<HighestTeamRank rank='bronze' />);
});
