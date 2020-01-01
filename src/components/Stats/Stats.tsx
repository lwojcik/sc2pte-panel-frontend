import React from 'react';
import TotalGamesThisSeason from 'src/components/TotalGamesThisSeason/TotalGamesThisSeason';
import TotalCareerGames from 'src/components/TotalCareerGames/TotalCareerGames';
import BonusPool from 'src/components/BonusPool/BonusPool';
import HighestSoloRank from 'src/components/HighestSoloRank/HighestSoloRank';
import HighestTeamRank from 'src/components/HighestTeamRank/HighestTeamRank';
import { Rank } from 'src/components/RankImage/RankImage';
import styles from './Stats.module.scss';

export interface StatsObject {
  totalGamesThisSeason: number;
  totalCareerGames: number;
  bonusPool: number;
  highestSoloRank: Rank;
  highestTeamRank: Rank;
}

interface StatsProps {
  data: StatsObject;
}

const Stats = ({ data }: StatsProps) => (
  <div className={styles.Stats}>
    <TotalGamesThisSeason count={data.totalGamesThisSeason} /><br />
    <TotalCareerGames count={data.totalCareerGames} /><br />
    <BonusPool count={data.bonusPool} /><br />
    <HighestSoloRank rank={data.highestSoloRank} /><br />
    <HighestTeamRank rank={data.highestTeamRank} />
  </div>
);

export default Stats;
