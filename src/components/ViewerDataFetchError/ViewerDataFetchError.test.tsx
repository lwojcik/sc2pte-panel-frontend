import React from 'react';
import ReactDOM from 'react-dom';
import ViewerDataFetchError from './ViewerDataFetchError';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewerDataFetchError />, div);
  ReactDOM.unmountComponentAtNode(div);
});
