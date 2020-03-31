import React from 'react';
import classnames from 'classnames/bind';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useConfigData from 'src/hooks/useConfigData/useConfigData';
import ConfigBackground from 'src/components/ConfigBackground/ConfigBackground';
import ConfigConnectionError from 'src/components/ConfigConnectionError/ConfigConnectionError';
import FormikWrapper from 'src/components/FormikWrapper/FormikWrapper';
import Unauthorized from 'src/components/Unauthorized/Unauthorized';
import ConfigForm from 'src/components/ConfigForm/ConfigForm';
import Footer from'src/components/Footer/Footer';
import addValidator from 'src/helpers/addValidator/addValidator';
import addValidationSchema from 'src/helpers/addValidationSchema/addValidationSchema';
import submitConfig from 'src/helpers/submitConfig/submitConfig';
import appConfig from 'src/config/app';
import 'typeface-lato';
import styles from './Config.module.scss';

const cx = classnames.bind(styles);

const Config = () => {
  const { authorized, channelId, token } = useTwitchAuth();
  const { data, error } = useConfigData(channelId, token);
  const configSubmitFunction = submitConfig(channelId, token);
  const validator = addValidator();
  const validationSchema = addValidationSchema(validator);
  const maxProfiles = data.maxProfiles && data.maxProfiles > appConfig.maxProfiles
    ? data.maxProfiles
    : appConfig.maxProfiles;

  if (!authorized) return (
    <Unauthorized />
  );

  if (error && !data.profiles) return (
    <div className={cx('Config')}>
      <ConfigConnectionError />
    </div>
  );

  return (
    <div className={cx('Config')}>
      <ConfigBackground />
      <div className={cx('cols')}>
        <div className={cx('formCol')}>
          <FormikWrapper
            initialValues={data}
            validationSchema={validationSchema}
            onSubmit={configSubmitFunction}
          >
            {(props) => (
              <ConfigForm
                {...props}
                status={props.status}
                profiles={props.values.profiles}
                maxProfiles={maxProfiles}
              />
            )}
          </FormikWrapper>
        </div>
        <div className={cx('infoCol')}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Info
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Config;
