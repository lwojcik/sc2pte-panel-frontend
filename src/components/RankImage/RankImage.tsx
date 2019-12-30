import React from 'react';
import classnames from 'classnames/bind';
import calculateRankTier from 'src/helpers/calculateRankTier/calculateRankTier';
import calculateTierRange from 'src/helpers/calculateTierRange/calculateTierRange';
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

export type Tier = 1 | 2 | 3 | 4;

interface RankImageProps {
  rank: Rank;
  divisionRank?: number;
}

const cx = classnames.bind(styles);

const RankImage = ({ rank, divisionRank }: RankImageProps) => {
  const tier = calculateRankTier(rank, divisionRank);
  const tierRange = calculateTierRange(rank, tier);
  const title = divisionRank
    ? capitalize(`${rank}, top ${tierRange}`)
    : capitalize(rank);

  return (
    <div className={cx('RankImage', `${rank}_${tier}`)} title={title} />
  );
};

export default RankImage;
