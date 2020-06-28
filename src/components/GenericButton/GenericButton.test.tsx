import React from 'react';
import { render } from '@testing-library/react';
import GenericButton from './GenericButton';

it('renders correctly', () => {
  render(
    <GenericButton
      onClick={jest.fn()}
      className='Test'
    />
  );
});
