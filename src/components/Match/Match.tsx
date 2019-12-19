import React from 'react';
import MapName from 'src/components/MapName/MapName';
import Separator from 'src/components/Separator/Separator';
import Result, { ResultType } from 'src/components/Result/Result';
import Date from 'src/components/Date/Date';
import styles from './Match.module.scss';

export interface MatchObject {
  mapName: string;
  mode: string;
  result: ResultType;
  date: number;
}

interface MatchProps {
  match: MatchObject;
}

const Match = ({ match }: MatchProps) => (
  <div className={styles.Match}>
    <MapName name={match.mapName} /> <Separator /> {match.mode}<br />
    <Result type={match.result} /> <Separator /> <Date date={match.date} />
  </div>
);

export default Match;
