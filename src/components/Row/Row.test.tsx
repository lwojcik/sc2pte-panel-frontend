import React from 'react';
import { render } from '@testing-library/react';
import Row from './Row';

it('renders correctly', () => {
  render(
    <Row>
      <p>Test element</p>
    </Row>
  );
});
