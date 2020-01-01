import React from 'react';
import classnames from 'classnames/bind';
import LoadingScreenLogo from 'src/components/LoadingScreenLogo/LoadingScreenLogo';
import styles from './LoadingScreen.module.scss';

const cx = classnames.bind(styles);

const LoadingScreen = () => (
  <div className={cx('LoadingScreen')}>
    <LoadingScreenLogo />
  </div>
);

export default LoadingScreen;
