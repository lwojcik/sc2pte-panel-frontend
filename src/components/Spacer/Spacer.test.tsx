import React from 'react';
import { render } from '@testing-library/react';
import Spacer from './Spacer';

it('renders correctly', () => {
  render(
    <Spacer>
      <p>Test element</p>
    </Spacer>
  );
});
