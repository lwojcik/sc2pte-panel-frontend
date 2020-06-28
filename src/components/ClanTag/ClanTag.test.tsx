import React from 'react';
import { render, screen } from '@testing-library/react';
import ClanTag from './ClanTag';

it('renders correctly when clan tag is provided', () => {
  render(<ClanTag tag='TestTag' />);
  expect(screen.getByText(/TestTag/i)).toBeInTheDocument();
});

it('renders correctly when no clan tag is provided', () => {
  render(<ClanTag />);
});
