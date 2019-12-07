import React from 'react';
import Match, { MatchObject } from 'src/components/Match/Match';
import styles from './History.module.scss';

interface HistoryProps {
  data: MatchObject[];
}

const History = ({ data }: HistoryProps) => (
  <div className={styles.History}>
    {data.map((match, key) => <Match key={key} match={match} />)}
  </div>
);

export default History;