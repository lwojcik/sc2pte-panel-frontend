import React from 'react';
import { render, screen } from '@testing-library/react';
import ClanName from './ClanName';

it('renders correctly when clan name is provided', () => {
  render(<ClanName name='Test Clan Name' />);
  expect(screen.getByText(/Test Clan Name/i)).toBeInTheDocument();
});

it('renders correctly when no clan name is provided', () => {
  render(<ClanName />);
});
