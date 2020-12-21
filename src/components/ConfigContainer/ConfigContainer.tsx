import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigInfoBox.module.scss';

const cx = classnames.bind(styles);

interface ConfigContainerProps {
  children: ReactElement;
}

const ConfigContainer = ({ children }: ConfigContainerProps) => (
  <div className={cx('ConfigContainer')}>
    {children}
  </div>
);

export default ConfigContainer;
