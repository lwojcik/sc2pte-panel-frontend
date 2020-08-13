import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './LadderWrapper.module.scss';

interface LadderWrapperProps {
  children: ReactElement | ReactElement[];
}

const cx = classnames.bind(styles);

const LadderWrapper = ({ children }: LadderWrapperProps) => (
  <div className={cx('LadderWrapper')}>
    {children}
  </div>
);

export default LadderWrapper;
