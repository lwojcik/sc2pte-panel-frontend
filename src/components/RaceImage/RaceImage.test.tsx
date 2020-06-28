import React from 'react';
import { render } from '@testing-library/react';
import RaceImage from './RaceImage';

it('renders correctly', () => {
  render(<RaceImage race='terran' />);
});
