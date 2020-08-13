import React, { useEffect, useRef } from 'react';

interface OutsideClickAreaProps {
  active: boolean;
  callback: () => void;
  children: any;
}

const OutsideClickArea = ({ active, callback, children }: OutsideClickAreaProps) => {
  const node = useRef() as React.MutableRefObject<HTMLDivElement>;;

  const handleClickOutside = (e: MouseEvent) => {
    if (node?.current?.contains(e.target as HTMLElement)) {
      return;
    }
    callback();
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div
      ref={node}
      onClick={() => callback()}
    >
      {children}
    </div>
  );
};

export default OutsideClickArea;
