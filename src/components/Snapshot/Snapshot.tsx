import React from 'react';
import classnames from 'classnames/bind';
import HoverableScrollArea from 'src/components/HoverableScrollArea/HoverableScrollArea';
import Ladder, { LadderObject } from 'src/components/Ladder/Ladder';
import styles from './Snapshot.module.scss';

interface SnapshotProps {
  data: LadderObject[];
}

const cx = classnames.bind(styles);

const Snapshot = ({ data }: SnapshotProps) => (
  <HoverableScrollArea className={cx('Snapshot')}>
    <>
      {data.map((ladder, key) => (
        <Ladder key={key} ladder={ladder} />
      ))}
    </>
  </HoverableScrollArea>
);

export default Snapshot;