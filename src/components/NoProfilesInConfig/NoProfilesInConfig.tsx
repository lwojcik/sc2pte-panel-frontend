import React from 'react';
import classnames from 'classnames/bind';
import styles from './NoProfilesInConfig.module.scss';

const cx = classnames.bind(styles);

const NoProfilesInConfig = () => (
  <div className={cx('NoProfilesInConfig')}>
    <p>No StarCraft II profiles found!<br/>
    Please add one using the link below.</p>
  </div>
);

export default NoProfilesInConfig;
