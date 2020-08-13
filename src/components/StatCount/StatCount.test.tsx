import React from 'react';
import { render } from '@testing-library/react';
import StatCount from './StatCount';

it('renders correctly', () => {
  render(
    <StatCount>
      Test
    </StatCount>
  );
});
