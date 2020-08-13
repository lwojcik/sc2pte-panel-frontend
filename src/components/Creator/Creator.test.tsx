import React from 'react';
import { render } from '@testing-library/react';
import Creator from './Creator';

it('renders correctly', () => {
  render(
    <Creator
      role='Test role'
      name='Test name'
      href='testHref'
      image='testImage'
    />
  );
});
