import React from 'react';
import classnames from 'classnames/bind';
import Portrait from 'components/Portrait/Portrait';
import Player from 'components/Player/Player';
import Arrow from 'components/Arrow/Arrow';
import { HeadingObject } from 'types';
import styles from './Heading.module.scss';

interface HeadingProps {
  onClick?: () => void;
  showArrow: boolean;
  active: boolean;
  data: HeadingObject;
}

const cx = classnames.bind(styles);

const Heading = ({
  onClick,
  showArrow,
  active,
  data,
}: HeadingProps) => {
  const {
    portrait,
    player,
  } = data;

  return (
    <div
      onClick={onClick}
      className={cx('Heading', { clickable: onClick, active })}
    >
      <Portrait portrait={portrait} />
      <Player player={player} />
      {showArrow && (
        <div className={cx('bottomLeft')}>
          <Arrow active={active} />
        </div>
      )}
    </div>
  );
};

export default Heading;
