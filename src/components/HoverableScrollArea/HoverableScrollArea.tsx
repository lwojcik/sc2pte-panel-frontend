import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import useToggle from 'src/hooks/useToggle/useToggle';
import ScrollbarContainer from 'src/components/ScrollbarContainer/ScrollbarContainer';
import styles from './HoverableScrollArea.module.scss';

interface HoverableScrollAreaProps {
  className?: string;
  children: ReactElement;
}

const cx = classnames.bind(styles);

const HoverableScrollArea = ({ className, children }: HoverableScrollAreaProps) => {
  const [state, toggleState] = useToggle(false);

  return (
    <div
      className={cx('HoverableScrollArea', className)}
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
};

export default HoverableScrollArea;
