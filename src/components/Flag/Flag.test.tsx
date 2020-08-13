import React from 'react';
import { render } from '@testing-library/react';
import Flag from './Flag';

it('renders correctly', () => {
  render(<Flag code='eu' />);
});
