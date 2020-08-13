import React from 'react';
import classnames from 'classnames/bind';
import ClanName from 'components/ClanName/ClanName';
import ClanTag from 'components/ClanTag/ClanTag';
import PlayerName from 'components/PlayerName/PlayerName';
import Flag from 'components/Flag/Flag';
import { PlayerObject } from 'types';
import styles from './Player.module.scss';

interface PlayerProps {
  player: PlayerObject;
}

const cx = classnames.bind(styles);

const Player = ({ player }: PlayerProps) => {
  const {
    name,
    clan,
    server,
  } = player;

  return (
    <div className={cx('Player')}>
      <div className={cx('signature')}>
        <ClanTag tag={clan.tag} />
        <PlayerName name={name} />
      </div>
      <ClanName name={clan.name} />
      <div className={cx('flag')}>
        <Flag code={server} />
      </div>
    </div>
  );
};

export default Player;
