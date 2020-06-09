import React from 'react';
import classnames from 'classnames/bind';
import { Form, FormikProps, FormikValues } from 'formik';
import ConfigFieldArray from 'components/ConfigFieldArray/ConfigFieldArray';
import ConfigProfileErrors from 'components/ConfigProfileErrors/ConfigProfileErrors';
import SubmitButton from 'components/SubmitButton/SubmitButton';
import SubmitStatusMessage from 'components/SubmitStatusMessage/SubmitStatusMessage';
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
  const { success, msg } = status;
  const disabled = (!dirty && !isSubmitting) || areThereErrors(errors);
  const disableDragDrop = areThereErrors(errors) || profiles.length === 1;
  const profileErrors = typeof errors.profiles === 'string';
  const showStatusMessage = !dirty && msg;

  return (
    <div className={cx('ConfigForm')}>
      <Form>
        <ConfigFieldArray
          profiles={profiles}
          errors={errors}
          maxProfiles={maxProfiles}
          disableDragDrop={disableDragDrop}
        />
        {profileErrors && (
          <ConfigProfileErrors>
            {errors.profiles as string}
          </ConfigProfileErrors>
        )}
        <SubmitButton
          disabled={disabled}
        />
        {showStatusMessage && (
          <SubmitStatusMessage
            success={success}
            message={msg}
          />
        )}
      </Form>
    </div>
  );
};

export default ConfigForm;
