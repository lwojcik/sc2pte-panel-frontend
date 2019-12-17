import React from 'react';
import useToggle from 'src/hooks/useToggle/useToggle';
import ScrollbarContainer from 'src/components/ScrollbarContainer/ScrollbarContainer'
import Match, { MatchObject } from 'src/components/Match/Match';
import styles from './History.module.scss';

interface HistoryProps {
  data: MatchObject[];
}

const History = ({ data }: HistoryProps) => {
  const { state, toggleState } = useToggle(false);

  return (
    <div
      className={styles.History}
      onMouseEnter={toggleState}
      onMouseLeave={toggleState}
      onTouchStartCapture={toggleState}
      onTouchEndCapture={toggleState}
    >
      <ScrollbarContainer visible={state}>
        <>
          {data.map((match, key) => (
            <Match key={key} match={match} />
          ))}
        </>
      </ScrollbarContainer>
    </div>
  );
}

export default History;