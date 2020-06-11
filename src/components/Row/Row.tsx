import React from 'react';
import classnames from 'classnames/bind';
import styles from './Row.module.scss';

const cx = classnames.bind(styles);

interface RowProps {
  children: true | false | JSX.Element | JSX.Element[];
}

const Row = ({ children }: RowProps) => (
  <div className={cx('Row')}>
    {children}
  </div>
);

export default Row;
