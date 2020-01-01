import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import Heading, { HeadingObject } from 'src/components/Heading/Heading';
import Details, { DetailsObject } from 'src/components/Details/Details';
import styles from './Profile.module.scss';

export interface ProfileObject {
  heading: HeadingObject;
  details: DetailsObject;
}

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

  return (
    <div className={cx('Profile', { single, active, listActive })}>
      <Heading
        data={data.heading}
        active={active}
        onClick={onClickFn}
        showArrow={!single}
      />
      <Details
        data={data.details}
        visible={single || active}
      />
    </div>
  );
};

export default Profile;
