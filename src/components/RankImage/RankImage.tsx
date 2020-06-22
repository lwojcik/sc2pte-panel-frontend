import React from 'react';
import classnames from 'classnames/bind';
import calculateRankTier from 'helpers/calculateRankTier/calculateRankTier';
import calculateTierRange from 'helpers/calculateTierRange/calculateTierRange';
import capitalize from 'helpers/capitalize/capitalize';
import { Rank } from 'types';
import styles from './RankImage.module.scss';

interface RankImageProps {
  rank: Rank;
  divisionRank?: number;
}

const cx = classnames.bind(styles);

const RankImage = ({ rank, divisionRank }: RankImageProps) => {
  const tier = calculateRankTier(rank, divisionRank) || 1;
  const tierRange = calculateTierRange(rank, tier)  || 1;
  const title = divisionRank
    ? capitalize(`${rank}, top ${tierRange}`)
    : capitalize(rank);

  return (
    <div
      className={cx('RankImage', `${rank}_${tier}`)}
      title={title}
    />
  );
};

export default RankImage;
