import React from 'react';
import classnames from 'classnames/bind';
import styles from './Separator.module.scss';

const cx = classnames.bind(styles);

const Separator = () => (
  <span className={cx('Separator')}>
    &nbsp;|&nbsp;
  </span>
);

export default Separator;
