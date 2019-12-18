import React, { ReactElement } from 'react';
import { StrollableContainer } from 'react-stroller';
import Scrollbar from 'src/components/Scrollbar/Scrollbar';

interface ScrollbarContainerProps {
  visible?: boolean;
  children: ReactElement;
}

const ScrollbarContainer = ({ visible, children }: ScrollbarContainerProps) => (
  <StrollableContainer
    draggable
    gap={20}
    bar={() => <Scrollbar visible={visible ?? true} />}
  >
    {children}
  </StrollableContainer>
);

export default ScrollbarContainer;