import React from 'react';
import classnames from 'classnames/bind';
import styles from './MapName.module.scss';

interface ResultProps {
  name: string;
}

const cx = classnames.bind(styles);

const MapName = ({ name }: ResultProps) => (
  <span className={cx('MapName')}>
    {name}
  </span>
);

export default MapName;