import React from 'react';
import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  disabled?: boolean;
}

const SubmitButton = ({ disabled }: SubmitButtonProps) => (
  <button
    className={styles.SubmitButton}
    disabled={disabled}
    type='submit'
  >
    {disabled ? 'Disabled' : 'Submit' }
  </button>
);

export default SubmitButton;
