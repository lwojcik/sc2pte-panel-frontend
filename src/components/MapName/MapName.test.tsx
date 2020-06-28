import React from 'react';
import { render } from '@testing-library/react';
import MapName from './MapName';

it('renders correctly', () => {
  render(<MapName name='Test' />);
});
