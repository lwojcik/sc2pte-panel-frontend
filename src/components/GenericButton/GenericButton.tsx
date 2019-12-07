import React from 'react';

interface GenericButtonProps {
  className: string,
  onClick: () => void,
  disabled?: boolean,
  children: string,
}

const GenericButton = ({
  className,
  onClick,
  disabled,
  children
}: GenericButtonProps) => (
  <button
    type='button'
    disabled={disabled}
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default GenericButton;