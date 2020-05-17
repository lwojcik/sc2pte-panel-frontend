import React from 'react';
import { Form, FormikProps, FormikValues } from 'formik';
import ConfigFieldArray from 'components/ConfigFieldArray/ConfigFieldArray';
import SubmitButton from 'components/SubmitButton/SubmitButton';
import { ConfigData } from 'types';

interface ConfigFormErrors {
  profiles?: string[] | string;
}

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
  const showStatusMessage = !dirty && status;

  return (
    <Form>
      <ConfigFieldArray
        profiles={profiles}
        errors={errors}
        maxProfiles={maxProfiles}
        disableDragDrop={disableDragDrop}
      />
      <p>{profileErrors && errors.profiles}</p>
      <div>
        <SubmitButton
          disabled={disabled}
        />
        <p>{showStatusMessage && status.msg}</p>
      </div>
    </Form>
  );
};

export default ConfigForm;
