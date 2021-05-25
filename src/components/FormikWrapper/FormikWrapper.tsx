import React, { ReactElement } from 'react';
import { Formik, FormikProps, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

interface FormStateProviderProps {
  initialValues: FormikValues,
  validationSchema: object,
  onSubmit(values: FormikValues, actions: FormikHelpers<FormikValues>): Promise<void>,
  children(formikBag: FormikProps<FormikValues>): ReactElement,
}

const initialStatus = {
  success: false,
  msg: '',
};

const FormikWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormStateProviderProps) => (
  <Formik
    initialValues={initialValues}
    initialStatus={initialStatus}
    onSubmit={(
      values: FormikValues,
      actions: FormikHelpers<FormikValues>,
    ) => {
      onSubmit(values, actions);
      actions.resetForm(values);
    }}
    validationSchema={Yup.object().shape(validationSchema as ObjectShape)}
  >
    {formikBag => children(formikBag)}
  </Formik>
);

export default FormikWrapper;
