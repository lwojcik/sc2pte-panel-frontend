import React from 'react';
import classnames from 'classnames/bind';
import TotalGamesThisSeason from 'src/components/TotalGamesThisSeason/TotalGamesThisSeason';
import TotalCareerGames from 'src/components/TotalCareerGames/TotalCareerGames';
import TotalRankedSeasonGames from 'src/components/TotalRankedSeasonGames/TotalRankedSeasonGames';
import HighestSoloRank from 'src/components/HighestSoloRank/HighestSoloRank';
import HighestTeamRank from 'src/components/HighestTeamRank/HighestTeamRank';
import { Rank } from 'src/components/RankImage/RankImage';
import styles from './Stats.module.scss';

export interface StatsObject {
  totalGamesThisSeason: number;
  totalRankedGamesThisSeason: number;
  totalCareerGames: number;
  highestSoloRank: Rank;
  highestTeamRank: Rank;
}

interface StatsProps {
  data: StatsObject;
}

const cx = classnames.bind(styles);

const Stats = ({ data }: StatsProps) => (
  <div className={cx('Stats')}>
    <div className={cx('total')}>
      <TotalCareerGames count={data.totalCareerGames} />
    </div>
    <div className={cx('count')}>
      <TotalRankedSeasonGames count={data.totalRankedGamesThisSeason} />
      <TotalGamesThisSeason count={data.totalGamesThisSeason} />
    </div>
    <div className={cx('ranks')}>
      <div>
        <HighestSoloRank rank={data.highestSoloRank} />
      </div>
      <div>
        <HighestTeamRank rank={data.highestTeamRank} />
      </div>
    </div>
  </div>
);

export default Stats;
