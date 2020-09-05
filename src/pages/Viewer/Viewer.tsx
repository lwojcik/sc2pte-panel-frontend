import React, { useState, useEffect } from 'react';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useViewerData from 'hooks/useViewerData/useViewerData';
import ViewerPanel from 'components/ViewerPanel/ViewerPanel';
import Unauthorized from 'components/Unauthorized/Unauthorized';
import { ViewerData, ProfileObject } from 'types';
import appConfig from 'config/app';

const { refreshInterval } = appConfig;

const Viewer = () => {
  const { authorized, channelId, token } = useTwitchAuth();

  const { error, data } = useViewerData({
    channelId,
    token,
    refreshInterval,
  }) as ViewerData;

  const [userProfiles, setUserProfiles] = useState([] as ProfileObject[]);

  useEffect(() => {
    data?.profiles?.length > 0 && setUserProfiles(data.profiles);
  }, [ data ]);

  return authorized
    ? (
      <ViewerPanel
        error={error}
        profiles={userProfiles}
      />
    )
    : <Unauthorized />;
};

export default Viewer;
