import React from 'react';
import classnames from 'classnames/bind';
import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  disabled?: boolean;
}

const cx = classnames.bind(styles);

const SubmitButton = ({ disabled }: SubmitButtonProps) => (
  <button
    className={cx('SubmitButton')}
    disabled={disabled}
    type='submit'
  >
    {disabled ? 'Disabled' : 'Submit' }
  </button>
);

export default SubmitButton;
