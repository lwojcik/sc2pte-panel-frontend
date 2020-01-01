import React from 'react';
import classnames from 'classnames/bind';
import styles from './Arrow.module.scss';

interface ArrowProps {
  active: boolean;
}

const cx = classnames.bind(styles);

const Arrow = ({ active }: ArrowProps) => (
  <div className={cx('Arrow', { active })} />
);

export default Arrow;
