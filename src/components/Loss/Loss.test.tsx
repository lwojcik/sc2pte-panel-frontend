import React from 'react';
import { render } from '@testing-library/react';
import Loss from './Loss';

it('renders correctly', () => {
  render(<Loss count={999} />);
});
