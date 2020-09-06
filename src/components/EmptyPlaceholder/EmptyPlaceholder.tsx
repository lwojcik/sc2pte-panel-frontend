import React from 'react';
import classnames from 'classnames/bind';
import PlaceholderLogo from 'components/PlaceholderLogo/PlaceholderLogo';
import styles from './EmptyPlaceholder.module.scss';

interface EmptyPlaceholderProps {
  children: JSX.Element | JSX.Element[];
  fullHeight?: Boolean;
}

const cx = classnames.bind(styles);

const EmptyPlaceholder = ({ children, fullHeight }: EmptyPlaceholderProps) => (
  <div className={cx('EmptyPlaceholder', fullHeight && 'fullHeight')}>
    <PlaceholderLogo />
    {children}
  </div>
);

export default EmptyPlaceholder;
