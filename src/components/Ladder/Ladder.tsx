import React from 'react';
import classnames from 'classnames/bind';
import LadderWrapper from 'src/components/LadderWrapper/LadderWrapper';
import LadderMode, { LadderGameMode } from 'src/components/LadderMode/LadderMode';
import MMR from 'src/components/MMR/MMR';
import DivisionRank from 'src/components/DivisionRank/DivisionRank';
import RankImage, { Rank } from 'src/components/RankImage/RankImage';
import RaceImage, { Race } from 'src/components/RaceImage/RaceImage';
import WinLoseBar from 'src/components/WinLoseBar/WinLoseBar';
import WinLoseRatio from 'src/components/WinLoseRatio/WinLoseRatio';
import Row from 'src/components/Row/Row';
import Spacer from 'src/components/Spacer/Spacer';
import styles from './Ladder.module.scss';

export interface LadderObject {
  mode: LadderGameMode;
  rank: Rank;
  wins: number;
  losses: number;
  race: Race;
  mmr: number;
  divisionRank: number;
  teamMembers: string[];
}

interface LadderProps {
  ladder: LadderObject;
}

const cx = classnames.bind(styles);

const Ladder = ({ ladder }: LadderProps) => (
  <div className={cx('Ladder', ladder.race)}>
    <RankImage rank={ladder.rank} divisionRank={ladder.divisionRank} />
    <LadderWrapper>
      <Row>
        <Spacer>
          <LadderMode mode={ladder.mode} members={ladder.teamMembers} />
        </Spacer>
        <Spacer>
          <WinLoseRatio
            wins={ladder.wins}
            losses={ladder.losses}
          />
        </Spacer>
        <Spacer>
          <RaceImage race={ladder.race} />
        </Spacer>
      </Row>
      <Row>
        <WinLoseBar
          wins={ladder.wins}
          losses={ladder.losses}
        />
      </Row>
      <Spacer>
        <MMR rating={ladder.mmr} />
      </Spacer>
      <Spacer />
      <Spacer>
        <DivisionRank rank={ladder.divisionRank} />
      </Spacer>
    </LadderWrapper>
  </div>
);

export default Ladder;
