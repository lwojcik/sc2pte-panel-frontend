import React from 'react';
import classnames from 'classnames/bind';
import styles from './Loss.module.scss';

interface LossProps {
  count: number;
}

const cx = classnames.bind(styles);

const Loss = ({ count }: LossProps) => (
  <span className={cx('Loss')}>
    {count}
  </span>
);

export default Loss;
