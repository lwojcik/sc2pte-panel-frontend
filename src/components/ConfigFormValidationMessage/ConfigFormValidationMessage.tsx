import React from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigFormValidationMessage.module.scss';

const cx = classnames.bind(styles);

interface ConfigFormValidationMessageProps {
  children: string;
}

const ConfigFormValidationMessage = ({ children }: ConfigFormValidationMessageProps) => (
  <div className={cx('ConfigFormValidationMessage')}>
    {children}
  </div>
);

export default ConfigFormValidationMessage;
