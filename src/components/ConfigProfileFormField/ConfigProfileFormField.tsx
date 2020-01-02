import React from 'react';
import classnames from 'classnames/bind';
import { Field } from 'formik';
import styles from './ConfigProfileFormField.module.scss';

interface ConfigProfileFormFieldProps {
  name: string;
}

const cx = classnames.bind(styles);

const ConfigProfileFormField = ({ name }: ConfigProfileFormFieldProps) => (
  <Field
    className={cx('ConfigProfileFormField')}
    name={name}
    autocomplete='off'
  />
);

export default ConfigProfileFormField;
