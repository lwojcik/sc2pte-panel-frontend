import React from 'react';
import classnames from 'classnames/bind';
import logo from './images/logo.png';
import styles from './NoMatchesPlayed.module.scss';

const cx = classnames.bind(styles);

const NoMatchesPlayed = () => (
  <div className={cx('NoMatchesPlayed')}>
    <img src={logo} alt='' />
    <p>No matches played recently</p>
  </div>
);

export default NoMatchesPlayed;
