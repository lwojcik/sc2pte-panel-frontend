import React from 'react';
import { SchemaOf } from 'yup';
import { ConfigFormValues } from 'helpers/submitConfig/submitConfig';
import { FormikHelpers, FormikValues } from 'formik';
import classnames from 'classnames/bind';
import ConfigBackground from 'components/ConfigBackground/ConfigBackground';
import FormikWrapper from 'components/FormikWrapper/FormikWrapper';
import ConfigFormHeading from 'components/ConfigFormHeading/ConfigFormHeading';
import ConfigFormLeadText from 'components/ConfigFormLeadText/ConfigFormLeadText';
import ConfigForm from 'components/ConfigForm/ConfigForm';
import ConfigFormWrapper from 'components/ConfigFormWrapper/ConfigFormWrapper';
import ConfigInfoBox from 'components/ConfigInfoBox/ConfigInfoBox';
import Footer from 'components/Footer/Footer';
import 'typeface-lato';
import { ConfigData } from 'types';
import styles from './ConfigFormPanel.module.scss';

const cx = classnames.bind(styles);

interface ConfigFormPanelProps {
  initialValues: ConfigData;
  validationSchema: ({ profiles: SchemaOf<ConfigData> });
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
        <ConfigFormHeading />
        <ConfigFormLeadText />
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
        <ConfigInfoBox />
      </div>
    </ConfigFormWrapper>
    <Footer />
  </div>
);

export default ConfigFormPanel;
