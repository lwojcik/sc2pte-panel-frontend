import React from 'react';

import LadderMode from '../LadderMode/LadderMode';
import LadderRankImage from '../LadderRankImage/LadderRankImage';
import LadderWinLoseCount from '../LadderWinLoseCount/LadderWinLoseCount';
import LadderWinRatioBar from '../LadderWinRatioBar/LadderWinRatioBar';
import LadderTopMMR from '../LadderTopMMR/LadderTopMMR';

import './Ladder.css';

/* eslint-disable */

const Ladder = ({ mode, data }) => (
  <div className="Ladder">
    <LadderRankImage rank={data.topRank} />
    <div className="Stats">
      <LadderMode mode={mode} />
      <LadderWinLoseCount wins={data.wins} ties={data.ties} losses={data.losses} />
    </div>
    <LadderWinRatioBar wins={data.wins} ties={data.ties} losses={data.losses} />
    <LadderTopMMR mmr={data.topMMR} />
  </div>
);

/* eslint-enable */

export default Ladder;
