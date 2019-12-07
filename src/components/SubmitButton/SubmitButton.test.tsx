import React from 'react';
import ReactDOM from 'react-dom';
import SubmitButton from './SubmitButton';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
