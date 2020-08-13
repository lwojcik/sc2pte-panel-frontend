import React from 'react';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import ClickableHeading from './ClickableHeading';

const testString = 'Test element';
const testOnClick = jest.fn();
const testElement = (
  <ClickableHeading
    as='h1'
    expanded={false}
    onClick={testOnClick}
  >
    {testString}
  </ClickableHeading>
);

it('renders correctly', () => {
  render(testElement);
  expect(screen.queryByText(testString)).toBeInTheDocument();
});

it('onClick is triggered', () => {
  render(testElement);
  fireEvent.click(screen.getByText(/Test element/i));
  expect(testOnClick).toHaveBeenCalled();
});
