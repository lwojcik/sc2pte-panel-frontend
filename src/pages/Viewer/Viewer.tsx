import React from 'react';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useViewerData, { ViewerData } from 'src/hooks/useViewerData/useViewerData';
import ViewerPanel from 'src/components/ViewerPanel/ViewerPanel';
import Unauthorized from 'src/components/Unauthorized/Unauthorized';
import appConfig from 'src/config/app';

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
