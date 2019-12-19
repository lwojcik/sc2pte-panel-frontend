import React from 'react';
import { Field } from 'formik';
import styles from './ConfigProfileFormField.module.scss';

interface ConfigProfileFormFieldProps {
  name: string;
}

const ConfigProfileFormField = ({ name }: ConfigProfileFormFieldProps) => (
  <Field
    className={styles.ConfigProfileFormField}
    name={name}
  />
);

export default ConfigProfileFormField;
