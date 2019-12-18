import React from 'react';
import classnames from 'classnames/bind';
import styles from './MMR.module.scss';

interface LadderProps {
  rating: number;
}

const cx = classnames.bind(styles);

const MMR = ({ rating }: LadderProps) => (
  <span className={cx('MMR')}>
    {rating}
  </span>
);

export default MMR;