import React from 'react';
import { render } from '@testing-library/react';
import Win from './Win';

it('renders correctly', () => {
  render(<Win count={999} />);
});
