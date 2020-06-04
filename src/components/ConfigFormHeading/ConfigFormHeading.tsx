import React from 'react';
import classnames from 'classnames/bind';
import logo from './images/logo.png';
import styles from './ConfigFormHeading.module.scss';

const cx = classnames.bind(styles);

const ConfigFormHeading = () => (
  <div className={cx('ConfigFormHeading')}>
    <img
      src={logo}
      alt=''
    />
    <h2>Extension configuration</h2>
  </div>
);

export default ConfigFormHeading;
