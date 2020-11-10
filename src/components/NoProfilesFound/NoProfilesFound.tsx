import React from 'react';
import classnames from 'classnames/bind';
import styles from './NoProfilesFound.module.scss';
import PlaceholderLogo from 'components/PlaceholderLogo/PlaceholderLogo';

const cx = classnames.bind(styles);

const NoProfilesFound = () => (
  <div className={cx('NoProfilesFound')}>
    <PlaceholderLogo />
    <p>No StarCraft II profiles found!</p>
    <p>Please make sure the extension is configured correctly in your Twitch Creator Dashboard.</p>
    <p>If your extension is configured correctly and you keep seeing this error, it means StarCraft&nbsp;II data is temporarily unavailable. Please check again later.</p>
  </div>
);

export default NoProfilesFound;
