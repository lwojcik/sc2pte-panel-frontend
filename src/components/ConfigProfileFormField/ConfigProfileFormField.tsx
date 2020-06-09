import React from 'react';
import classnames from 'classnames/bind';
import { Field } from 'formik';
import styles from './ConfigProfileFormField.module.scss';

interface ConfigProfileFormFieldProps {
  name: string;
  placeholder?: string;
}

const cx = classnames.bind(styles);

const ConfigProfileFormField = ({
  name,
  placeholder,
}: ConfigProfileFormFieldProps) => (
  <Field
    className={cx('ConfigProfileFormField')}
    name={name}
    placeholder={placeholder}
  />
);

export default ConfigProfileFormField;
