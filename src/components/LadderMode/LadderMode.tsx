import React, { useState } from 'react';
import classnames from 'classnames/bind';
import DropdownArrow from 'src/components/DropdownArrow/DropdownArrow';
import DropdownArea from 'src/components/DropdownArea/DropdownArea';
import OutsideClickArea from 'src/components/OutsideClickArea/OutsideClickArea';
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
  const teamMode = mode !== '1v1';
  const [ expanded, setExpanded ] = useState(false);
  const [ hovered, setHovered ] = useState(false);

  return (
    <OutsideClickArea
      active={expanded}
      callback={() => teamMode ? setExpanded(!expanded) : null}
    >
      <div
        {...teamMode && ({ title: 'Click to see team members'})}
        className={cx('LadderMode', { hoverable: teamMode })}
        onMouseEnter={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {teamMode && (
          <>
            <DropdownArrow expanded={expanded} hovered={hovered} />
            <DropdownArea visible={expanded}>
              {members.map((member, key) => (
                <div key={key}>{member}</div>
              ))}
            </DropdownArea>
          </>
        )}
        {mode}:
      </div>
    </OutsideClickArea>

  );
};

export default LadderMode;
