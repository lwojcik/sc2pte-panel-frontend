import React from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigProfileErrors.module.scss';

interface ConfigProfileErrorsProps {
  children?: string;
}

const cx = classnames.bind(styles);

const ConfigProfileErrors = ({ children }: ConfigProfileErrorsProps) => (
  <div className={cx('ConfigProfileErrors')}>
    {children}
  </div>
);

export default ConfigProfileErrors;
