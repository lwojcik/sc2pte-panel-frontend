import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import Heading from 'components/Heading/Heading';
import Details from 'components/Details/Details';
import { ProfileObject } from 'types';
import styles from './Profile.module.scss';

interface ProfileProps {
  onClick?: () => void | undefined;
  data: ProfileObject;
  listActive?: boolean;
  single?: boolean;
}

const cx = classnames.bind(styles);

const Profile = ({
  onClick,
  data,
  listActive,
  single,
}: ProfileProps) => {
  const { heading, details } = data;
  const [active, setActive] = useState(false);

  useEffect(() => {
    single && setActive(true);
  }, [single]);

  const handleOnClick = () => {
    onClick && onClick();
    setActive(!active);
  };

  const onClickFn = single
    ? undefined
    : handleOnClick;

  const showArrow = !single;
  const detailsVisible = single || active;

  return (
    <div className={cx('Profile', { single, active, listActive })}>
      <Heading
        data={heading}
        active={active}
        onClick={onClickFn}
        showArrow={showArrow}
      />
      <Details
        data={details}
        visible={detailsVisible}
      />
    </div>
  );
};

export default Profile;
