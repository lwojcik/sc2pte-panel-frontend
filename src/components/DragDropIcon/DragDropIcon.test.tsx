import React from 'react';
import { render } from '@testing-library/react';
import DragDropIcon from './DragDropIcon';

it('renders correctly', () => {
  render(<DragDropIcon disabled={false} />);
});
