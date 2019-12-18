import React from 'react';
import classnames from 'classnames/bind';
import styles from './LadderMode.module.scss';

export type LadderGameMode =
  '1v1'
  | '2v2'
  | '3v3'
  | '4v4'
  | 'Archon';

interface LadderProps {
  mode: LadderGameMode;
}

const cx = classnames.bind(styles);

const LadderMode = ({ mode }: LadderProps) => (
  <span className={cx('Ladder')}>
    {mode}
  </span>
);

export default LadderMode;