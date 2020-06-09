import React, { useState } from 'react';
import classnames from 'classnames/bind';
import ClickableHeading from 'components/ClickableHeading/ClickableHeading';
import profile from './images/profile.png';
import switchProfile from './images/switchProfile.png';
import styles from './ConfigInfoBox.module.scss';

const cx = classnames.bind(styles);

const ConfigInfoBox = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cx('ConfigInfoBox')}>
      <ClickableHeading
        as='h2'
        onClick={() => setExpanded(!expanded)}
      >
        How to find your StarCraft II profile URL?
      </ClickableHeading>
      <div className={cx('content', { expanded })}>
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
            Copy the link to the profile page you just landed on. It should look similarly to this:<br/>
            <i>https://starcraft2.com/en-us/profile/1/2/242838</i>
          </li>
          <li>
            Paste the link to the config form. Save your changes. All done!
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ConfigInfoBox;
