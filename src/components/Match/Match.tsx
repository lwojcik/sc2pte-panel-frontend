import React from 'react';
import classnames from 'classnames/bind';
import MapName from 'components/MapName/MapName';
import Separator from 'components/Separator/Separator';
import Result from 'components/Result/Result';
import Date from 'components/Date/Date';
import { MatchObject } from 'types';
import styles from './Match.module.scss';

interface MatchProps {
  match: MatchObject;
}

const cx = classnames.bind(styles);

const Match = ({ match }: MatchProps) => {
  const {
    mapName,
    result,
    date,
  } = match;

  return (
    <div className={cx('Match')}>
      <MapName name={mapName} />
      <Separator />
      {match.mode}
      <br />
      <Result type={result} />
      <Separator />
      <Date date={date} />
    </div>
  );
};

export default Match;
