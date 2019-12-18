import React from 'react';
import ReactDOM from 'react-dom';
import HoverableScrollArea from './HoverableScrollArea';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <HoverableScrollArea className='test'>
      <p>Test</p>
    </HoverableScrollArea>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});