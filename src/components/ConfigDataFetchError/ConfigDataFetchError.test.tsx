import React from 'react';
import ReactDOM from 'react-dom';
import ConfigDataFetchError from './ConfigDataFetchError';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConfigDataFetchError />, div);
  ReactDOM.unmountComponentAtNode(div);
});
