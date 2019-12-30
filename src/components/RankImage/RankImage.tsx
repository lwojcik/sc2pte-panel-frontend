import React from 'react';
import classnames from 'classnames/bind';
import calculateRankTier from 'src/helpers/calculateRankTier/calculateRankTier';
import capitalize from 'src/helpers/capitalize/capitalize';
import styles from './RankImage.module.scss';

export type Rank =
  'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'master'
  | 'grandmaster';

interface RankImageProps {
  rank: Rank;
  divisionRank?: number;
}

const cx = classnames.bind(styles);

const RankImage = ({ rank, divisionRank }: RankImageProps) => {
  const tier = calculateRankTier(divisionRank);

  return (
    <div className={cx('RankImage', `${rank}_${tier}`)} title={capitalize(rank)} />
  );
};

export default RankImage;
