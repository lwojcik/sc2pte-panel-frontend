import React from 'react';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useViewerData, { ViewerData } from 'src/hooks/useViewerData/useViewerData';
import ViewerPanel from 'src/components/ViewerPanel/ViewerPanel';
import Unauthorized from 'src/components/Unauthorized/Unauthorized';
import styles from './Viewer.module.scss';

const Viewer = () => {
  const { authorized, channelId, token } = useTwitchAuth();
  const { error, data } = useViewerData(channelId, token) as ViewerData;
  return authorized
    ? (
      <div className={styles.Viewer}>
        <ViewerPanel error={error} data={data} />
      </div>
    )
    : <Unauthorized />;
};

export default Viewer;
