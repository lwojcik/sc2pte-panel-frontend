import React from 'react';
import classnames from 'classnames/bind';
import styles from './DropdownArrow.module.scss';

interface DropdownArrowProps {
  hovered?: boolean;
  expanded?: boolean;
}

const cx = classnames.bind(styles);

const DropdownArrow = ({ hovered, expanded }: DropdownArrowProps) => (
  <div className={cx('DropdownArrow', { expanded, hovered })} />
);

export default DropdownArrow;
