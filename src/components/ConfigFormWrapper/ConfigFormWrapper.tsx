import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigFormWrapper.module.scss';

const cx = classnames.bind(styles);

type TwoReactElements = [ReactElement, ReactElement];

interface ConfigFormWrapperProps {
  children: TwoReactElements;
}

const ConfigFormWrapper = ({ children }: ConfigFormWrapperProps) => (
  <div className={cx('ConfigFormWrapper')}>
    {children}
  </div>
);

export default ConfigFormWrapper;
