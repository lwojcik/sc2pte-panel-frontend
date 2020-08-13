import React from 'react';
import classnames from 'classnames/bind';
import styles from './ClanName.module.scss';

interface ClanNameProps {
  name?: string;
}

const cx = classnames.bind(styles);

const ClanName = ({ name }: ClanNameProps) => (
  <div className={cx('ClanName')}>
    {name}
  </div>
);

export default ClanName;
