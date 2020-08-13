import React from 'react';
import classnames from 'classnames/bind';
import profile from './images/profile.png';
import switchProfile from './images/switchProfile.png';
import styles from './ConfigInfoBox.module.scss';

const cx = classnames.bind(styles);

const ConfigInfoBox = () => (
  <div className={cx('ConfigInfoBox')}>
    <h2 title='Click to expand / collapse'>How to get your profile URL?</h2>
    <div className={cx('content')}>
      <ol>
        <li>
          Login to&nbsp;
          <a
            href='https://starcraft2.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            starcraft2.com
          </a> with your Battle.net credentials.</li>
        <li>
          Click <b>View profile</b> in top right corner of the site.
          <br/>
          <img
            src={profile}
            alt=''
          />
        </li>
        <li>
          Want to use a profile from a different region than the one you're currently logged in?
          <br/>
          Click <b>Change profile</b> and select a different profile from a dropdown menu.
          <br/>
          <br/>
          <img
            src={switchProfile}
            alt=''
          />
        </li>
        <li>
          Copy the link to the profile page you just landed on.
        </li>
        <li>
          Paste the link to the config form. Save your changes. All done!
        </li>
      </ol>
    </div>
  </div>
);

export default ConfigInfoBox;
