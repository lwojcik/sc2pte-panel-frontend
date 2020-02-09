import React from 'react';
import classnames from 'classnames/bind';
import GenericButton from 'src/components/GenericButton/GenericButton';
import styles from './DeleteProfileButton.module.scss';

interface DeleteProfileButtonProps {
  onClick: () => void,
  disabled?: boolean,
}

const cx = classnames.bind(styles);

const DeleteProfileButtonProps = ({ onClick, disabled }: DeleteProfileButtonProps) => (
  <GenericButton
    className={cx('DeleteProfileButton')}
    disabled={disabled}
    onClick={onClick}
    {...!disabled && { title: 'Delete profile URL' }}
  />
);

export default DeleteProfileButtonProps;
