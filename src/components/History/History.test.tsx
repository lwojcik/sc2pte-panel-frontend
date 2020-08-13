import React from 'react';
import { render } from '@testing-library/react';
import History from './History';
import { GameMode, ResultType } from 'types';

const testData = {
  data: [
    {
      mapName: 'Test Map Name 1 LE',
      mode: '1v1' as GameMode,
      result: 'win' as ResultType,
      date: 1562164424000,
    },
    {
      mapName: 'Test Map Name 2 LE',
      mode: '1v1' as GameMode,
      result: 'loss' as ResultType,
      date: 1562164424000,
    },
  ],
};

it('renders correctly', () => {
  render(<History {...testData} />);
});
