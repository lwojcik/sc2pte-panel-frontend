import React from 'react';
import classnames from 'classnames/bind';
import capitalize from 'helpers/capitalize/capitalize';
import styles from './RaceImage.module.scss';
import { Race } from 'types';

interface RaceImageProps {
  race: Race;
}

const cx = classnames.bind(styles);

const RaceImage = ({ race }: RaceImageProps) => (
  <div
    className={cx('RaceImage', race)}
    title={capitalize(race)}
  />
);

export default RaceImage;
