import React from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigServerError.module.scss';

const cx = classnames.bind(styles);

const ConfigServerError = () => (
  <div className={cx('ConfigServerError')}>
    <p>Cannot access configuration server at the moment. It may be temporarily unavailable or under maintenance.</p>
    <p>Please try again later as the server may be experiencing high traffic or connection issues.</p>
  </div>
);

export default ConfigServerError;
