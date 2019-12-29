import React from 'react';
import classnames from 'classnames/bind';
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
}

const cx = classnames.bind(styles);

const RankImage = ({ rank }: RankImageProps) => (
  <div className={cx('RankImage', rank)} title={capitalize(rank)}></div>
);

export default RankImage;
