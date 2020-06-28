import React from 'react';
import { render } from '@testing-library/react';
import PortraitImage from './PortraitImage';

it('renders correctly', () => {
  render(<PortraitImage url='testUrl' />);
});
