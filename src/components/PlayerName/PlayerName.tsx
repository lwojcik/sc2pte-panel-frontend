import React from 'react';
import classnames from 'classnames/bind';
import styles from './PlayerName.module.scss';

interface PlayerNameProps {
  name: string;
}

const cx = classnames.bind(styles);

const PlayerName = ({ name }: PlayerNameProps) => (
  <span className={cx('PlayerName')}>
    {name}
  </span>
);

export default PlayerName;
