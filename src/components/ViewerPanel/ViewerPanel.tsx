import React from 'react';
import ProfileList from 'src/components/ProfileList/ProfileList';
import Profile, { ProfileObject } from 'src/components/Profile/Profile';
import NoProfilesFound from 'src/components/NoProfilesFound/NoProfilesFound';
import ViewerDataFetchError from 'src/components/ViewerDataFetchError/ViewerDataFetchError';
import 'typeface-lato';
import styles from './ViewerPanel.module.scss';

interface ViewerPanelProps {
  data: {
    profiles: ProfileObject[];
  },
  error?: Boolean;
}

const ViewerPanel = ({ data, error }: ViewerPanelProps) => (
  <div className={styles.ViewerPanel}>
    {error && (
      <ViewerDataFetchError />
    )}

    {data?.profiles.length === 0 && (
      <NoProfilesFound />
    )}

    {data?.profiles.length === 1 && (
      <Profile
        data={data.profiles[0]}
        single={true}
      />
    )}

    {data?.profiles.length > 1 && (
      <ProfileList data={data.profiles} />
    )}
  </div>
);

export default ViewerPanel;
