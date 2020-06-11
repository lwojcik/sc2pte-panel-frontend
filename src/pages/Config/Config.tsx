import React from 'react';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useConfigData from 'hooks/useConfigData/useConfigData';
import ConfigFormPanel from 'components/ConfigFormPanel/ConfigFormPanel';
import ConfigConnectionError from 'components/ConfigConnectionError/ConfigConnectionError';
import Unauthorized from 'components/Unauthorized/Unauthorized';
import addValidator from 'helpers/addValidator/addValidator';
import addValidationSchema from 'helpers/addValidationSchema/addValidationSchema';
import submitConfig from 'helpers/submitConfig/submitConfig';
import appConfig from 'config/app';
import 'typeface-lato';

const Config = () => {
  const { authorized, channelId, token } = useTwitchAuth();
  const { data, error } = useConfigData(channelId, token);
  console.log({ data, error }); // eslint-disable-line
  const onSubmit = submitConfig(channelId, token);
  const validator = addValidator();
  const validationSchema = addValidationSchema(validator);
  const maxProfiles = appConfig.maxProfiles;

  if (!authorized) return (
    <Unauthorized />
  );

  if (error) return (
    <ConfigConnectionError />
  );

  return (
    <ConfigFormPanel
      initialValues={data}
      validationSchema={validationSchema}
      maxProfiles={maxProfiles}
      onSubmit={onSubmit}
    />
  );
};

export default Config;
