import React from 'react';
import classnames from 'classnames/bind';
import PlaceholderLogo from 'src/components/PlaceholderLogo/PlaceholderLogo';
import styles from './NoLaddersFound.module.scss';

const cx = classnames.bind(styles);

const NoMatchesPlayed = () => (
  <div className={cx('NoLaddersFound')}>
    <PlaceholderLogo />
    <p>No ladder placements found</p>
  </div>
);

export default NoMatchesPlayed;
