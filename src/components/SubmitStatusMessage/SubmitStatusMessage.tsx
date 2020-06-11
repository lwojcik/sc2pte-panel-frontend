import React from 'react';
import classnames from 'classnames/bind';
import styles from './SubmitStatusMessage.module.scss';

const cx = classnames.bind(styles);

interface SubmitStatusMessageProps {
  success: boolean;
  message: string;
}

const SubmitStatusMessage = ({
  success,
  message,
}: SubmitStatusMessageProps) => (
  <div className={cx('SubmitStatusMessage', success ? 'success' : 'failure' )}>
    {message}
  </div>
);

export default SubmitStatusMessage;
