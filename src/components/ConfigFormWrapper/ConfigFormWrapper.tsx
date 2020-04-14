import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigFormWrapper.module.scss';

interface ConfigFormWrapperProps {
  children: ReactElement;
}

const cx = classnames.bind(styles);

const ConfigFormWrapper = ({ children }: ConfigFormWrapperProps) => (
  <div className={cx('ConfigFormWrapper')}>
    {children}
  </div>
);

export default ConfigFormWrapper;
