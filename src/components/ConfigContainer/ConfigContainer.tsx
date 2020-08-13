import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigInfoBox.module.scss';

const cx = classnames.bind(styles);

interface ConfigContainer {
  children: ReactElement;
}

const ConfigContainer = ({ children }: ConfigContainer) => (
  <div className={cx('ConfigContainer')}>
    {children}
  </div>
);

export default ConfigContainer;
