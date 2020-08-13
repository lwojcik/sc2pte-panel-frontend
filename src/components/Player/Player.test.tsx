import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';
import { ServerLocale } from 'types';

const testData = {
  player: {
    clan: {
      name: 'testClan',
      tag: 'testTag',
    },
    name: 'testName',
    server: 'eu' as ServerLocale,
  },
};

it('renders correctly', () => {
  render(<Player {...testData} />);
});
