import React from 'react';
import classnames from 'classnames/bind';
import styles from './RaceImage.module.scss';

export type Race =
  'terran'
  | 'zerg'
  | 'protoss'
  | 'random';

interface RaceImageProps {
  race: Race;
}

const cx = classnames.bind(styles);

const RaceImage = ({ race }: RaceImageProps) => (
  <div className={cx('RaceImage', race)}></div>
);

export default RaceImage;
