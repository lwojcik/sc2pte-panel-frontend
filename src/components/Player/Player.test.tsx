import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';
import { ServerLocale } from 'src/components/Flag/Flag';
const testObject = {
  clan: {
    name: 'testClan',
    tag: 'testTag',
  },
  name: 'testName',
  server: 'eu' as ServerLocale,
}

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Player player={testObject} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
