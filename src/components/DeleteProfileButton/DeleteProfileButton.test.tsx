import React from 'react';
import { render } from '@testing-library/react';
import DeleteProfileButton from './DeleteProfileButton';

it('renders correctly', () => {
  render(<DeleteProfileButton onClick={jest.fn()} />);
});
