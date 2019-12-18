import React, { ReactElement } from 'react';
import useToggle from 'src/hooks/useToggle/useToggle';
import ScrollbarContainer from 'src/components/ScrollbarContainer/ScrollbarContainer'

interface HoverableScrollAreaProps {
  className?: string;
  children: ReactElement;
}

const HoverableScrollArea = ({ className, children }: HoverableScrollAreaProps) => {
  const { state, toggleState } = useToggle(false);

  return (
    <div
      className={className}
      onMouseEnter={toggleState}
      onMouseLeave={toggleState}
      onTouchStartCapture={toggleState}
      onTouchEndCapture={toggleState}
    >
      <ScrollbarContainer visible={state}>
        {children}
      </ScrollbarContainer>
    </div>
  );
}

export default HoverableScrollArea;