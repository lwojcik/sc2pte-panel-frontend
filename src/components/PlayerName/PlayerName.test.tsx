import React from 'react';
import { render } from '@testing-library/react';
import PlayerName from './PlayerName';

it('renders correctly', () => {
  render(<PlayerName name='Test' />);
});
