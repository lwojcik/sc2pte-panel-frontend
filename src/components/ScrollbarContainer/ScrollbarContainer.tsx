import React, { ReactElement } from 'react';
import { StrollableContainer } from 'react-stroller';
import Scrollbar from 'src/components/Scrollbar/Scrollbar';

interface ScrollbarContainerProps {
  children: ReactElement;
}

const ScrollbarContainer = ({ children }: ScrollbarContainerProps) => (
  <StrollableContainer draggable gap={20} bar={Scrollbar}>
    {children}
  </StrollableContainer>
);

export default ScrollbarContainer;