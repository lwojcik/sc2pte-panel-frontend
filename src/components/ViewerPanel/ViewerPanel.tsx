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

const ViewerPanel = ({ data, error }: ViewerPanelProps) => (
  <div className={cx('ViewerPanel')}>
    {(!data.profiles || error) && (
      <ViewerDataFetchError />
    )}

    {data?.profiles?.length === 0 && (
      <NoProfilesFound />
    )}

    {data?.profiles?.length === 1 && (
      <Profile
        data={data.profiles[0]}
        single={true}
      />
    )}

    {data?.profiles?.length > 1 && (
      <ProfileList data={data.profiles} />
    )}
  </div>
);

export default ViewerPanel;
