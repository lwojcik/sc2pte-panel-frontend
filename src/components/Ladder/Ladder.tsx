import React from 'react';
import classnames from 'classnames/bind';
import LadderWrapper from 'components/LadderWrapper/LadderWrapper';
import LadderMode from 'components/LadderMode/LadderMode';
import MMR from 'components/MMR/MMR';
import DivisionRank from 'components/DivisionRank/DivisionRank';
import RankImage from 'components/RankImage/RankImage';
import RaceImage from 'components/RaceImage/RaceImage';
import WinLoseBar from 'components/WinLoseBar/WinLoseBar';
import WinLoseRatio from 'components/WinLoseRatio/WinLoseRatio';
import Row from 'components/Row/Row';
import Spacer from 'components/Spacer/Spacer';
import { LadderObject } from 'types';
import styles from './Ladder.module.scss';

interface LadderProps {
  ladder: LadderObject;
}

const cx = classnames.bind(styles);

// const ConditionalMMR = ({  });

const Ladder = ({ ladder }: LadderProps) => {
  const {
    race,
    mode,
    divisionRank,
    teamMembers,
    wins,
    losses,
    mmr,
  } = ladder;

  return (
    <div className={cx('Ladder', race)}>
      <RankImage
        rank={ladder.rank}
        divisionRank={divisionRank}
      />
      <LadderWrapper>
        <Row>
          <Spacer>
            <LadderMode
              mode={mode}
              members={teamMembers}
            />
          </Spacer>
          <Spacer>
            <WinLoseRatio
              wins={wins}
              losses={losses}
            />
          </Spacer>
          <Spacer>
            <RaceImage race={race} />
          </Spacer>
        </Row>
        <Row>
          <WinLoseBar
            wins={wins}
            losses={losses}
          />
        </Row>
        <>
          {mmr > 0 && (
            <>
              <Spacer>
                <MMR rating={mmr} />
              </Spacer>
              <Spacer />
            </>
          )}
        </>
        <Spacer>
          <DivisionRank rank={divisionRank} />
        </Spacer>
      </LadderWrapper>
    </div>
  );
};

export default Ladder;
