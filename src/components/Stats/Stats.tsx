import React from 'react';
import TotalGames from 'src/components/TotalGames/TotalGames';
import BonusPool from 'src/components/BonusPool/BonusPool';
import HighestSoloRank from 'src/components/HighestSoloRank/HighestSoloRank';
import HighestTeamRank from 'src/components/HighestTeamRank/HighestTeamRank';
import { Rank } from 'src/components/RankImage/RankImage';
import styles from './Stats.module.scss';

export interface StatsObject {
  totalGames: number;
  bonusPool: number;
  highestSoloRank: Rank;
  highestTeamRank: Rank;
}

interface StatsProps {
  data: StatsObject;
}

const Stats = ({ data }: StatsProps) => (
  <div className={styles.Stats}>
    <TotalGames count={data.totalGames} /><br />
    <BonusPool count={data.bonusPool} /><br />
    <HighestSoloRank rank={data.highestSoloRank} /><br />
    <HighestTeamRank rank={data.highestTeamRank} />
  </div>
);

export default Stats;