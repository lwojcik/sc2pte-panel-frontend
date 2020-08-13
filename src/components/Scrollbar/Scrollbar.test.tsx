import React from 'react';
import { render } from '@testing-library/react';
import Scrollbar from './Scrollbar';

it('renders correctly', () => {
  render(<Scrollbar visible={true} />);
});
