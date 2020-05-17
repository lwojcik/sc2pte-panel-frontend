import React, { useState }  from 'react';
import Profile from 'components/Profile/Profile';
import classnames from 'classnames/bind';
import { ProfileObject } from 'types';
import styles from './ProfileList.module.scss';

interface ProfileListProps {
  data: ProfileObject[];
}

const cx = classnames.bind(styles);

const ProfileList = ({ data }: ProfileListProps) => {
  const [expanded, setExpanded] = useState(false);

  const onClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={cx('ProfileList', { expanded })}>
      {data.map((profile, key) => (
        <Profile
          key={key}
          data={profile}
          onClick={onClick}
          listActive={expanded}
        />
      ))}
    </div>
  );
};

export default ProfileList;
