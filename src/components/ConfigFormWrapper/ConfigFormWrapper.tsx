import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigFormWrapper.module.scss';

const cx = classnames.bind(styles);

interface ConfigFormWrapperProps {
  children: ReactElement[];
}

const ConfigFormWrapper = ({ children }: ConfigFormWrapperProps) => (
  <div className={cx('ConfigFormWrapper')}>
    {children}
  </div>
);

export default ConfigFormWrapper;
