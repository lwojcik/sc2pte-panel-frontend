import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import DropdownArrow from 'src/components/DropdownArrow/DropdownArrow';
import styles from './LadderMode.module.scss';

export type LadderGameMode =
  '1v1'
  | '2v2'
  | '3v3'
  | '4v4'
  | 'Archon';

interface LadderProps {
  mode: LadderGameMode;
  members: string[];
}

const cx = classnames.bind(styles);

const LadderMode = ({ mode, members }: LadderProps) => {
  const node = useRef() as React.MutableRefObject<HTMLDivElement>;;
  const teamMode = mode !== '1v1';
  const [ expanded, setExpanded ] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current.contains(e.target as HTMLElement)) {
      return;
    }
    setExpanded(false);
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div
      ref={node}
      className={cx('LadderMode', { hoverable: teamMode })}
      onClick={e => teamMode ? setExpanded(!expanded) : null}
    >
      {teamMode && (
        <DropdownArrow expanded={expanded} />
      )}
      {mode}:
      <div className={cx('dropdown', { expanded })}>
        Test
      </div>
    </div>
  );
};

export default LadderMode;
