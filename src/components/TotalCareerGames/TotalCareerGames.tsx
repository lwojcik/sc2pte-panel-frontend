import React from 'react';
import classnames from 'classnames/bind';
import styles from './TotalCareerGames.module.scss';

interface TotalCareerGamesProps {
  count: number;
}

const cx = classnames.bind(styles);

const TotalCareerGames = ({ count }: TotalCareerGamesProps) => (
  <div className={cx('TotalCareerGames')}>
    Total career games:<br/>
    {count}
  </div>
);

export default TotalCareerGames;
