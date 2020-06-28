import React from 'react';
import { render } from '@testing-library/react';
import Date from './Date';

it('renders correctly', () => {
  render(<Date date={1562164424000} />);
});
