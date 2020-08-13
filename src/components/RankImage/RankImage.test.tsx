import React from 'react';
import { render } from '@testing-library/react';
import RankImage from './RankImage';

it('renders correctly', () => {
  render(<RankImage rank='silver' />);
});
