import React from 'react';
import ScrollbarContainer from 'src/components/ScrollbarContainer/ScrollbarContainer'
import Match, { MatchObject } from 'src/components/Match/Match';
import styles from './History.module.scss';

interface HistoryProps {
  data: MatchObject[];
}

const History = ({ data }: HistoryProps) => (
  <div className={styles.History}>
    <ScrollbarContainer>
      <>
        {data.map((match, key) => <Match key={key} match={match} />)}
      </>
    </ScrollbarContainer>
  </div>
);

export default History;