import React from 'react';
import { render } from '@testing-library/react';
import Portrait from './Portrait';
import { Rank } from 'types';

const testData = {
  portrait: {
    url: 'sampleUrl',
    frame: 'silver' as Rank,
  }
};

it('renders correctly', () => {
  render(<Portrait {...testData} />);
});
