import React from 'react';
import classnames from 'classnames/bind';
import GenericButton from 'components/GenericButton/GenericButton';
import styles from './AddProfileButton.module.scss';

interface AddProfileButtonProps {
  onClick: () => void;
  profilesLeft: number;
  disabled?: boolean;
}

const cx = classnames.bind(styles);

const AddProfileButton = ({
  onClick,
  profilesLeft,
  disabled,
}: AddProfileButtonProps) => (
  <GenericButton
    className={cx('AddProfileButton')}
    disabled={disabled}
    onClick={onClick}
  >
    <>
      +&nbsp;Add a profile (available slots: {profilesLeft})
    </>
  </GenericButton>
);

export default AddProfileButton;
