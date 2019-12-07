import React from 'react';
import ClanName from 'src/components/ClanName/ClanName';
import ClanTag from 'src/components/ClanTag/ClanTag';
import PlayerName from 'src/components/PlayerName/PlayerName';
import Flag, { ServerLocale } from 'src/components/Flag/Flag';
import styles from './Player.module.scss';

export interface PlayerObject {
  clan: {
    name: string;
    tag: string;
  };
  name: string;
  server: ServerLocale;
}

interface PlayerProps {
  player: PlayerObject;
}

const Player = ({ player }: PlayerProps) => (
  <div className={styles.Player}>
    <div className={styles.signature}>
      <ClanTag tag={player.clan.tag} />
      <PlayerName name={player.name} />
    </div>
    <ClanName name={player.clan.name} />
    <div className={styles.flag}>
      <Flag code={player.server} />
    </div>
  </div>
);

export default Player;