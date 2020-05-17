import React from 'react';
import classnames from 'classnames/bind';
import LogoHand from 'components/LogoHand/LogoHand';
import styles from './LoadingScreenLogo.module.scss';

const cx = classnames.bind(styles);

const LoadingScreenLogo = () => (
  <div className={cx('LoadingScreenLogo')}>
    <div className={cx('left')}>
      <LogoHand />
    </div>
    <div className={cx('right')}>
      <LogoHand />
    </div>
  </div>
);

export default LoadingScreenLogo;
