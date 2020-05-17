import React from 'react';
import classnames from 'classnames/bind';
import ConfigProfileFormField from 'components/ConfigProfileFormField/ConfigProfileFormField';
import DragDropIcon from 'components/DragDropIcon/DragDropIcon';
import DeleteProfileButton from 'components/DeleteProfileButton/DeleteProfileButton';
import ConfigFormValidationMessage from 'components/ConfigFormValidationMessage/ConfigFormValidationMessage';
import styles from './ConfigProfileFormFieldGroup.module.scss';

interface ProfileFormFieldGroupProps {
  index: number;
  profiles: string[];
  errors: string | false;
  disableDragDrop: boolean;
  deleteProfileFn: () => void;
}

const cx = classnames.bind(styles);

const ConfigProfileFormFieldGroup = ({
  index,
  profiles,
  errors,
  disableDragDrop,
  deleteProfileFn,
}: ProfileFormFieldGroupProps) => {
  const name = `profiles.${index}`;
  const disabled = profiles.length === 1;
  const validationErrors = typeof errors === 'string' && errors.length > 2;

  return (
    <div className={cx('ConfigProfileFormFieldGroup')}>
      <DragDropIcon disabled={disableDragDrop} />
      <ConfigProfileFormField name={name} />
      <DeleteProfileButton
        onClick={deleteProfileFn}
        disabled={disabled}
      />
      {validationErrors && (
        <ConfigFormValidationMessage>
          {errors as string}
        </ConfigFormValidationMessage>
      )}
    </div>
  );
};

export default ConfigProfileFormFieldGroup;
