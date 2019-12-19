import React from 'react';
import { Form, FormikProps, FormikValues } from 'formik';
import ConfigFieldArray from 'src/components/ConfigFieldArray/ConfigFieldArray';
import SubmitButton from 'src/components/SubmitButton/SubmitButton';

interface ConfigFormErrors {
  profiles?: string[] | string;
}

export interface ConfigFormProps extends FormikProps<FormikValues> {
    profiles: string[];
    status: {
      success: boolean;
      msg: string;
    };
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

const ConfigForm = ({
  profiles,
  errors,
  dirty,
  isSubmitting,
  status
}: ConfigFormProps) => {
  return (
    <Form>
      <ConfigFieldArray
        profiles={profiles}
        errors={errors}
        disableDragDrop={areThereErrors(errors)}
      />
      <p>{(typeof errors.profiles === 'string') && errors.profiles}</p>
      <div>
        <SubmitButton
          disabled={(!dirty && !isSubmitting) || areThereErrors(errors)}
        />
        <p>{!dirty && status && status.msg}</p>
      </div>
    </Form>
  );
}

export default ConfigForm;
