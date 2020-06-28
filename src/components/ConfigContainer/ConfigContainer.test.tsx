import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfigContainer from './ConfigContainer';

it('renders correctly', () => {
  render(
    <ConfigContainer>
      <p>Test element</p>
    </ConfigContainer>
  );

  expect(screen.getByText(/Test element/i)).toBeInTheDocument();
});
