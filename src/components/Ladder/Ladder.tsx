import React from 'react';
import classnames from 'classnames/bind';
import LadderMode, { LadderGameMode } from 'src/components/LadderMode/LadderMode';
import MMR from 'src/components/MMR/MMR';
import DivisionRank from 'src/components/DivisionRank/DivisionRank';
import RankImage, { Rank } from 'src/components/RankImage/RankImage';
import RaceImage, { Race } from 'src/components/RaceImage/RaceImage';
import WinLoseBar from 'src/components/WinLoseBar/WinLoseBar';
import WinLoseRatio from 'src/components/WinLoseRatio/WinLoseRatio';
import styles from './Ladder.module.scss';

export interface LadderObject {
  mode: LadderGameMode;
  rank: Rank;
  wins: number;
  losses: number;
  race: Race;
  mmr: number;
  divisionRank: number;
}

interface LadderProps {
  ladder: LadderObject;
}

const cx = classnames.bind(styles);

const Ladder = ({ ladder }: LadderProps) => (
  <div className={cx('Ladder', ladder.race)}>
    <RankImage rank={ladder.rank} />
    <div className={cx('data')}>
      <div>
        <LadderMode mode={ladder.mode} />
        <WinLoseRatio
          wins={ladder.wins}
          losses={ladder.losses}
        />
        <RaceImage race={ladder.race} />
      </div>
      <div>
        <WinLoseBar
          wins={ladder.wins}
          losses={ladder.losses}
        />
      </div>
      <div>
        <MMR rating={ladder.mmr} />
        <DivisionRank rank={ladder.divisionRank} />
      </div>
    </div>
  </div>
);

export default Ladder;