import React from 'react';
import classnames from 'classnames/bind';
import styles from './DropdownArrow.module.scss';

interface DropdownArrowProps {
  expanded?: boolean;
}

const cx = classnames.bind(styles);

const DropdownArrow = ({ expanded }: DropdownArrowProps) => (
  <div className={cx('DropdownArrow', { expanded })} />
);

export default DropdownArrow;
