import React from 'react';
import classnames from 'classnames/bind';
import styles from './Scrollbar.module.scss';

const cx = classnames.bind(styles);

const Scrollbar = () => (
  <div className={cx('Scrollbar')}></div>
);

export default Scrollbar;