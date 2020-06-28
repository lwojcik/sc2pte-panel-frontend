import React from 'react';
import classnames from 'classnames/bind';
import ProfileList from 'components/ProfileList/ProfileList';
import Profile from 'components/Profile/Profile';
import NoProfilesFound from 'components/NoProfilesFound/NoProfilesFound';
import ViewerDataFetchError from 'components/ViewerDataFetchError/ViewerDataFetchError';
import { ProfileObject } from 'types';
import 'typeface-lato';
import styles from './ViewerPanel.module.scss';

interface ViewerPanelProps {
  data: {
    profiles: ProfileObject[];
  },
  error?: Boolean;
}

const cx = classnames.bind(styles);

const ViewerPanel = ({ data, error }: ViewerPanelProps) => {
  const profiles = data.profiles.filter(
    profile =>
      Object.keys(profile).length > 0
  )
  || [];

  return (
    <div className={cx('ViewerPanel')}>
      {(!profiles || error) && (
        <ViewerDataFetchError />
      )}

      {profiles?.length === 0 && (
        <NoProfilesFound />
      )}

      {profiles?.length === 1 && (
        <Profile
          data={profiles[0]}
          single={true}
        />
      )}

      {profiles?.length > 1 && (
        <ProfileList data={profiles} />
      )}
    </div>
  );
};

export default ViewerPanel;
