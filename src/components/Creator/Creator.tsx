import React from 'react';
import classnames from 'classnames/bind';
import styles from './Creator.module.scss';

const cx = classnames.bind(styles);

interface CreatorProps {
  role: string;
  name: string;
  href: string;
  image: string;
}

const Creator = ({
  role,
  name,
  href,
  image,
}: CreatorProps) => (
  <div className={cx('Creator')}>
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      title={name}
    >
      {role}:
      <img
        src={image}
        alt={name}
      />
    </a>
  </div>
);

export default Creator;
