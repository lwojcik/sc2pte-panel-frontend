import React from 'react';
import classnames from 'classnames/bind';
import styles from './NoProfilesFound.module.scss';
import PlaceholderLogo from 'src/components/PlaceholderLogo/PlaceholderLogo';

const cx = classnames.bind(styles);

const NoProfilesFound = () => (
  <div className={cx('NoProfilesFound')}>
    <PlaceholderLogo />
    <p>No StarCraft II profiles found!</p>
    <p>Please make sure the extension is configured correctly in your Twitch Creator Dashboard.</p>
  </div>
);

export default NoProfilesFound;
