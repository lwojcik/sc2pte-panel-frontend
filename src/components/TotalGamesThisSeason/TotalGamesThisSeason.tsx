import React from 'react';
import classnames from 'classnames/bind';
import styles from './TotalGamesThisSeason.module.scss';

interface TotalGamesThisSeasonProps {
  count: number;
}

const cx = classnames.bind(styles);

const TotalGamesThisSeason = ({ count }: TotalGamesThisSeasonProps) => (
  <div className={cx('TotalGamesThisSeason')}>
    Total games this season:<br/>
    {count}
  </div>
);

export default TotalGamesThisSeason;
