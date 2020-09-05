import React, { useState, ReactElement } from 'react';
import Arrow from 'components/Arrow/Arrow';
import classnames from 'classnames/bind';
import styles from './ClickableHeading.module.scss';

interface ClickableHeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  onClick?: () => void;
  children: string | ReactElement | (string | ReactElement)[];
}

const cx = classnames.bind(styles);

const ClickableHeading = ({
  as: Tag,
  onClick,
  children,
}: ClickableHeadingProps) => {
  const [active, setActive] = useState(false);

  const onClickFn = () => {
    setActive(!active);
    onClick && onClick();
  };

  return (
    <Tag
      className={cx(active)}
      onClick={onClickFn}
      title={`Click to ${active ? 'collapse' : 'expand'}`}
    >
      {children}
      <Arrow
        as='span'
        active={active}
      />
    </Tag>
  );
};

export default ClickableHeading;
