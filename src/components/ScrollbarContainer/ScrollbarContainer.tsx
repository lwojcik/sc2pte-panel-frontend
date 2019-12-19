import React, { ReactElement } from 'react';
import { StrollableContainer } from 'react-stroller';
import Scrollbar from 'src/components/Scrollbar/Scrollbar';

interface ScrollbarContainerProps {
  visible: boolean;
  children: ReactElement;
}

const ScrollbarContainer = ({ visible, children }: ScrollbarContainerProps) => (
  <StrollableContainer
    draggable
    gap={0}
    passive={true}
    bar={() => <Scrollbar visible={visible} />}
  >
    {children}
  </StrollableContainer>
);

export default ScrollbarContainer;