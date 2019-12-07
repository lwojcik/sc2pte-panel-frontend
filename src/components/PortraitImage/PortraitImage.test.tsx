import React from 'react';
import ReactDOM from 'react-dom';
import PortraitImage from './PortraitImage';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortraitImage url="testUrl" />, div);
  ReactDOM.unmountComponentAtNode(div);
});