import React from 'react';
import ReactDOM from 'react-dom';
import Separator from './Separator';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Separator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
