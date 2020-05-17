import React from 'react';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useViewerData from 'hooks/useViewerData/useViewerData';
import ViewerPanel from 'components/ViewerPanel/ViewerPanel';
import Unauthorized from 'components/Unauthorized/Unauthorized';
import { ViewerData } from 'types';
import appConfig from 'config/app';

const { updateInterval } = appConfig;

const Viewer = () => {
  const { authorized, channelId, token } = useTwitchAuth();
  const { error, data } = useViewerData(channelId, token, updateInterval) as ViewerData;

  return authorized
    ? (
      <ViewerPanel
        error={error}
        data={data}
      />
    )
    : (
      <Unauthorized />
    );
};

export default Viewer;
