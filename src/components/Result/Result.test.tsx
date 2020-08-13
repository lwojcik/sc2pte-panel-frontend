import React from 'react';
import { render } from '@testing-library/react';
import Result from './Result';

it('renders correctly', () => {
  render(<Result type='win' />);
});
