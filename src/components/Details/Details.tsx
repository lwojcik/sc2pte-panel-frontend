import React from 'react';
import classnames from 'classnames/bind';
import TabSection from 'components/TabSection/TabSection';
import TabSectionElement from 'components/TabSectionElement/TabSectionElement';
import Snapshot from 'components/Snapshot/Snapshot';
import History from 'components/History/History';
import Stats from 'components/Stats/Stats';
import { DetailsObject } from 'types';
import styles from './Details.module.scss';

interface DetailsProps {
  visible?: boolean;
  data: DetailsObject;
}

const cx = classnames.bind(styles);

const Details = ({ visible, data }: DetailsProps) => {
  const {
    snapshot,
    stats,
    history,
  } = data;

  return (
    <div className={cx('Details', { visible })}>
      <TabSection>
        <TabSectionElement name='Snapshot'>
          <Snapshot data={snapshot} />
        </TabSectionElement>
        <TabSectionElement name='Stats'>
          <Stats data={stats} />
        </TabSectionElement>
        <TabSectionElement name='History'>
          <History data={history} />
        </TabSectionElement>
      </TabSection>
    </div>
  );
};

export default Details;
