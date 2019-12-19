import React from 'react';
import GenericButton from 'src/components/GenericButton/GenericButton';
import styles from './AddProfileButton.module.scss';

interface AddProfileButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const AddProfileButton = ({ onClick, disabled }: AddProfileButtonProps) => (
  <GenericButton
    className={styles.AddProfileButton}
    disabled={disabled}
    onClick={onClick}
  >
    Add a profile
  </GenericButton>
);

export default AddProfileButton;
