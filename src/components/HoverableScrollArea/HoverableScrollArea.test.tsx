import React from 'react';
import { render } from '@testing-library/react';
import HoverableScrollArea from './HoverableScrollArea';

it('renders correctly', () => {
  render(
    <HoverableScrollArea className='testClass'>
      <p>Test element</p>
    </HoverableScrollArea>
  );
});
