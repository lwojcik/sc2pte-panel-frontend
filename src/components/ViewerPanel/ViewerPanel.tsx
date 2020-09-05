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
  profiles: ProfileObject[],
  error?: Boolean;
}

const cx = classnames.bind(styles);

const ViewerPanel = ({ profiles, error }: ViewerPanelProps) => {
  const filteredProfiles = profiles?.filter(
    profile =>
      Object.keys(profile).length > 0
  ) || [];

  return (
    <div className={cx('ViewerPanel')}>
      {(!filteredProfiles || error) && (
        <ViewerDataFetchError />
      )}

      {filteredProfiles?.length === 0 && !error && (
        <NoProfilesFound />
      )}

      {filteredProfiles?.length === 1 && (
        <Profile
          data={filteredProfiles[0]}
          single={true}
        />
      )}

      {filteredProfiles?.length > 1 && (
        <ProfileList data={filteredProfiles} />
      )}
    </div>
  );
};

export default ViewerPanel;
