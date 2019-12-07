import React from 'react';
import ReactDOM from 'react-dom';
import NoProfilesFound from './NoProfilesFound';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoProfilesFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
