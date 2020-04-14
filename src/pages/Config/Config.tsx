import React from 'react';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useConfigData from 'src/hooks/useConfigData/useConfigData';
import ConfigFormPanel from 'src/components/ConfigFormPanel/ConfigFormPanel';
import ConfigConnectionError from 'src/components/ConfigConnectionError/ConfigConnectionError';
import Unauthorized from 'src/components/Unauthorized/Unauthorized';
import addValidator from 'src/helpers/addValidator/addValidator';
import addValidationSchema from 'src/helpers/addValidationSchema/addValidationSchema';
import submitConfig from 'src/helpers/submitConfig/submitConfig';
import appConfig from 'src/config/app';
import 'typeface-lato';

const Config = () => {
  const { authorized, channelId, token } = useTwitchAuth();
  const { data, error } = useConfigData(channelId, token);
  const onSubmit = submitConfig(channelId, token);
  const validator = addValidator();
  const validationSchema = addValidationSchema(validator);
  const maxProfiles = data.maxProfiles | appConfig.maxProfiles;

  if (!authorized) return (
    <Unauthorized />
  );

  if (error && !data.profiles) return (
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
