import React from 'react';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import AddProfileButton from './AddProfileButton';

const testOnClick = jest.fn();
const testElement = (
  <AddProfileButton
    onClick={testOnClick}
    profilesLeft={3}
  />
);

it('renders correctly', () => {
  render(testElement);
  expect(screen.queryByText(/\+/i)).toBeInTheDocument();
});

it('onClick is triggered', () => {
  render(testElement);
  fireEvent.click(screen.getByText(/\+/i));
  expect(testOnClick).toHaveBeenCalled();
});
