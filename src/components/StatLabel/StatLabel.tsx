import React from 'react';
import classnames from 'classnames/bind';
import styles from './StatLabel.module.scss';

interface StatLabelProps {
  children: string | string[];
}

const cx = classnames.bind(styles);

const StatLabel = ({ children }: StatLabelProps) => (
  <div className={cx('StatLabel')}>
    {children}
  </div>
);

export default StatLabel;
