import React from 'react';
import classnames from 'classnames/bind';
import TotalGamesThisSeason from 'components/TotalGamesThisSeason/TotalGamesThisSeason';
import TotalCareerGames from 'components/TotalCareerGames/TotalCareerGames';
import TotalRankedSeasonGames from 'components/TotalRankedSeasonGames/TotalRankedSeasonGames';
import HighestSoloRank from 'components/HighestSoloRank/HighestSoloRank';
import HighestTeamRank from 'components/HighestTeamRank/HighestTeamRank';
import { StatsObject } from 'types';
import styles from './Stats.module.scss';

interface StatsProps {
  data: StatsObject;
}

const cx = classnames.bind(styles);

const Stats = ({ data }: StatsProps) => {
  const {
    highestSoloRank,
    highestTeamRank,
    totalRankedGamesThisSeason,
    totalGamesThisSeason,
    totalCareerGames,
  } = data;

  return (
    <div className={cx('Stats')}>
      <div className={cx('ranks')}>
        <div>
          <HighestSoloRank rank={highestSoloRank} />
        </div>
        <div>
          <HighestTeamRank rank={highestTeamRank} />
        </div>
      </div>
      <div className={cx('count')}>
        <TotalRankedSeasonGames count={totalRankedGamesThisSeason} />
        <TotalGamesThisSeason count={totalGamesThisSeason} />
      </div>
      <div className={cx('total')}>
        <TotalCareerGames count={totalCareerGames} />
      </div>

    </div>
  );
};

export default Stats;
