import React from 'react';
import { render } from '@testing-library/react';
import EmptyPlaceholder from './EmptyPlaceholder';

it('renders correctly', () => {
  render(
    <EmptyPlaceholder>
      <p>Test element</p>
    </EmptyPlaceholder>
  );
});
