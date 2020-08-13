import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './DropdownArea.module.scss';

interface DropdownAreaProps {
  visible: boolean;
  children: ReactElement | ReactElement[] | Element | Element[] | string;
}

const cx = classnames.bind(styles);

const DropdownArea = ({ visible, children }: DropdownAreaProps) => (
  <div className={cx('DropdownArea', { visible })}>
    {children}
  </div>
);

export default DropdownArea;
