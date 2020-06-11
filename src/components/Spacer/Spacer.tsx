import React from 'react';
import classnames from 'classnames/bind';
import styles from './Spacer.module.scss';

const cx = classnames.bind(styles);

interface SpacerProps {
  children?: JSX.Element | JSX.Element[];
}

const Spacer = ({ children }: SpacerProps) => (
  <div className={cx('Spacer')}>
    {children}
  </div>
);

export default Spacer;
