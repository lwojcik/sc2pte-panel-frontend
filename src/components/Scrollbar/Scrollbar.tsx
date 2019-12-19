import React from 'react';
import classnames from 'classnames/bind';
import styles from './Scrollbar.module.scss';

const cx = classnames.bind(styles);

interface ScrollbarProps {
  visible: boolean;
}

const Scrollbar = ({ visible }: ScrollbarProps) => (
  <div className={cx('Scrollbar', { visible })}></div>
);

export default Scrollbar;
