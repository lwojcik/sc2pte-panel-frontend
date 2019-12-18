import React from 'react';
import classnames from 'classnames/bind';
import Match, { MatchObject } from 'src/components/Match/Match';
import HoverableScrollArea from 'src/components/HoverableScrollArea/HoverableScrollArea';
import styles from './History.module.scss';

interface HistoryProps {
  data: MatchObject[];
}

const cx = classnames.bind(styles);

const History = ({ data }: HistoryProps) => (
  <HoverableScrollArea className={cx('History')}>
    <>
      {data.map((match, key) => (
        <Match key={key} match={match} />
      ))}
    </>
  </HoverableScrollArea>
);

export default History;