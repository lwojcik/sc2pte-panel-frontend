import React from 'react';
import classnames from 'classnames/bind';
import { Form, FormikProps, FormikValues } from 'formik';
import ConfigFieldArray from 'components/ConfigFieldArray/ConfigFieldArray';
import SubmitButton from 'components/SubmitButton/SubmitButton';
import { ConfigData } from 'types';
import styles from './ConfigForm.module.scss';

interface ConfigFormErrors {
  profiles?: string[] | string;
}

const cx = classnames.bind(styles);

const areThereErrors = (errors: ConfigFormErrors) =>
  !!(errors?.profiles
    && (
      (
        Array.isArray(errors.profiles)
          && errors.profiles.some((error: string | null) => typeof error === 'string')
      )
      || (typeof errors.profiles === 'string'
        && errors.profiles.length > 0)
    ));

interface ConfigFormProps extends ConfigData, FormikProps<FormikValues> {
  status: {
    success: boolean;
    msg: string;
  };
}

const ConfigForm = ({
  profiles,
  errors,
  maxProfiles,
  dirty,
  isSubmitting,
  status
}: ConfigFormProps) => {
  const disabled = (!dirty && !isSubmitting) || areThereErrors(errors);
  const disableDragDrop = areThereErrors(errors) || profiles.length === 1;
  const profileErrors = typeof errors.profiles === 'string';
  const showStatusMessage = !dirty && status.msg;

  return (
    <div className={cx('ConfigForm')}>
      <Form>
        <ConfigFieldArray
          profiles={profiles}
          errors={errors}
          maxProfiles={maxProfiles}
          disableDragDrop={disableDragDrop}
        />
        <p>{profileErrors && errors.profiles}</p>
        <SubmitButton
          disabled={disabled}
        />
        {showStatusMessage && (
          <p>{status.msg}</p>
        )}
      </Form>
    </div>
  );
};

export default ConfigForm;
