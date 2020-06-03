import React from 'react';
import { Schema } from 'yup';
import { ConfigFormValues } from 'helpers/submitConfig/submitConfig';
import { FormikHelpers, FormikValues } from 'formik';
import classnames from 'classnames/bind';
import ConfigBackground from 'components/ConfigBackground/ConfigBackground';
import FormikWrapper from 'components/FormikWrapper/FormikWrapper';
import ConfigForm from 'components/ConfigForm/ConfigForm';
import ConfigFormWrapper from 'components/ConfigFormWrapper/ConfigFormWrapper';
import Footer from 'components/Footer/Footer';
import 'typeface-lato';
import { ConfigData } from 'types';
import styles from './ConfigFormPanel.module.scss';

const cx = classnames.bind(styles);

interface ConfigFormPanelProps {
  initialValues: ConfigData;
  validationSchema: ({ profiles: Schema<ConfigData> });
  maxProfiles: number;
  onSubmit: (values: ConfigFormValues, actions: FormikHelpers<FormikValues>) => Promise<void>;
}

const ConfigFormPanel = ({
  initialValues,
  validationSchema,
  maxProfiles,
  onSubmit,
}: ConfigFormPanelProps) => (
  <div className={cx('ConfigFormPanel')}>
    <ConfigBackground />
    <ConfigFormWrapper>
      <div>
        <FormikWrapper
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <ConfigForm
              {...props}
              status={props.status}
              profiles={props.values.profiles}
              maxProfiles={maxProfiles}
            />
          )}
        </FormikWrapper>
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Info
      </div>
    </ConfigFormWrapper>
    <Footer />
  </div>
);

export default ConfigFormPanel;
