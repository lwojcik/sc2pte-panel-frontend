import React from 'react';
import { render } from '@testing-library/react';
import PortraitFrame from './PortraitFrame';

it('renders correctly', () => {
  render(
    <PortraitFrame rank='silver'>
      <p>Test element</p>
    </PortraitFrame>
  );
});
