import React from 'react';
import GenericButton from 'src/components/GenericButton/GenericButton';
import styles from './DeleteProfileButton.module.scss';

interface DeleteProfileButtonProps {
  onClick: () => void,
  disabled?: boolean,
}

const DeleteProfileButtonProps = ({ onClick, disabled }: DeleteProfileButtonProps) => (
  <GenericButton
    className={styles.DeleteProfileButton}
    disabled={disabled}
    onClick={onClick}
  >
    X
  </GenericButton>
);

export default DeleteProfileButtonProps;