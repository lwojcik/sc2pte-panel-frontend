import React from 'react';
import classnames from 'classnames/bind';
import PlaceholderLogo from 'src/components/PlaceholderLogo/PlaceholderLogo';
import styles from './EmptyPlaceholder.module.scss';

interface EmptyPlaceholderProps {
  children: JSX.Element | JSX.Element[];
}

const cx = classnames.bind(styles);

const EmptyPlaceholder = ({ children }: EmptyPlaceholderProps) => (
  <div className={cx('EmptyPlaceholder')}>
    <PlaceholderLogo />
    {children}
  </div>
);

export default EmptyPlaceholder;
