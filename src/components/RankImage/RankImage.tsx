import React from 'react';
import classnames from 'classnames/bind';
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
  <div className={cx('RankImage', rank)}></div>
);

export default RankImage;