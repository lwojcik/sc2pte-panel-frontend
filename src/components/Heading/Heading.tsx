import React from 'react';
import classnames from 'classnames/bind';
import Portrait, { PortraitObject } from 'src/components/Portrait/Portrait';
import Player, { PlayerObject } from 'src/components/Player/Player';
import Arrow from 'src/components/Arrow/Arrow';
import styles from './Heading.module.scss';

export interface HeadingObject {
  portrait: PortraitObject;
  player: PlayerObject;
}

interface HeadingProps {
  onClick?: () => void;
  showArrow: boolean;
  active: boolean;
  data: HeadingObject;
}

const cx = classnames.bind(styles);

const Heading = ({ onClick, showArrow, active, data }: HeadingProps) => (
  <div onClick={onClick} className={cx('Heading', { clickable: onClick, active })}>
    <Portrait portrait={data.portrait} />
    <Player player={data.player} />
    {showArrow && (
      <div className={cx('bottomLeft')}>
        <Arrow active={active} />
      </div>
    )}
  </div>
);

export default Heading;
