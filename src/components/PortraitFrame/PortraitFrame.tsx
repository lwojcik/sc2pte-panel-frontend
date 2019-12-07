import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './PortraitFrame.module.scss';

interface PortraitFrameProps {
  rank: string;
  children: ReactElement;
}

const cx = classnames.bind(styles);

const PortraitFrame = ({ rank, children }: PortraitFrameProps) => (
  <div className={cx('PortraitFrame')}>
    <div className={cx('frame', rank)} />
    <div className={cx('content')}>
      {children}
    </div>
  </div>
);

export default PortraitFrame;