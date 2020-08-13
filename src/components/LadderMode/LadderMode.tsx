import React, { useState } from 'react';
import classnames from 'classnames/bind';
import DropdownArrow from 'components/DropdownArrow/DropdownArrow';
import DropdownArea from 'components/DropdownArea/DropdownArea';
import OutsideClickArea from 'components/OutsideClickArea/OutsideClickArea';
import { LadderGameMode } from 'types';
import styles from './LadderMode.module.scss';

interface LadderProps {
  mode: LadderGameMode;
  members: string[];
}

const cx = classnames.bind(styles);

const LadderMode = ({ mode, members }: LadderProps) => {
  const teamMode = mode !== '1v1' && members;
  const [ expanded, setExpanded ] = useState(false);
  const [ hovered, setHovered ] = useState(false);

  return (
    <OutsideClickArea
      active={expanded}
      callback={() => teamMode ? setExpanded(!expanded) : null}
    >
      <div
        {...teamMode && ({ title: 'Click to see team members'})}
        className={cx('LadderMode', { hoverable: teamMode && members })}
        onMouseEnter={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {teamMode && (
          <>
            <DropdownArrow
              expanded={expanded}
              hovered={hovered}
            />
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
