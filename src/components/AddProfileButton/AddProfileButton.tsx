import React from 'react';
import classnames from 'classnames/bind';
import GenericButton from 'src/components/GenericButton/GenericButton';
import styles from './AddProfileButton.module.scss';

interface AddProfileButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const cx = classnames.bind(styles);

const AddProfileButton = ({ onClick, disabled }: AddProfileButtonProps) => (
  <GenericButton
    className={cx('AddProfileButton')}
    disabled={disabled}
    onClick={onClick}
  >
    + Add a profile
  </GenericButton>
);

export default AddProfileButton;
