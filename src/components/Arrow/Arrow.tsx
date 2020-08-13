import React from 'react';
import classnames from 'classnames/bind';
import styles from './Arrow.module.scss';

interface ArrowProps {
  as?: 'div' | 'span';
  active?: boolean;
}

const cx = classnames.bind(styles);

const Arrow = ({ as: Tag, active }: ArrowProps) => {
  return Tag
    ? <Tag className={cx('Arrow', { active })} />
    : <div className={cx('Arrow', { active })} />;
};

export default Arrow;
