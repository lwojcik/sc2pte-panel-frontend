import React from 'react';
import classnames from 'classnames/bind';
import ConfigProfileFormField from 'src/components/ConfigProfileFormField/ConfigProfileFormField';
import DeleteProfileButton from 'src/components/DeleteProfileButton/DeleteProfileButton';
import styles from './ConfigProfileFormFieldGroup.module.scss';

interface ProfileFormFieldGroupProps {
  index: number,
  profiles: string[],
  errors: string | false,
  deleteProfileFn: () => void,
}

const cx = classnames.bind(styles);

const ConfigProfileFormFieldGroup = ({
  index,
  profiles,
  errors,
  deleteProfileFn
}: ProfileFormFieldGroupProps) => (
  <div className={cx('ConfigProfileFormFieldGroup')}>
    <ConfigProfileFormField name={`profiles.${index}`} />
    <DeleteProfileButton
      onClick={deleteProfileFn}
      disabled={profiles.length === 1}
    />
    {errors && errors.length > 2 ? errors : ''}
  </div>
);

export default ConfigProfileFormFieldGroup;
