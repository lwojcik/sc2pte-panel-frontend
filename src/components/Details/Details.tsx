import React from 'react';
import classnames from 'classnames/bind';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Snapshot from 'src/components/Snapshot/Snapshot';
import History from 'src/components/History/History';
import { LadderObject } from 'src/components/Ladder/Ladder';
import Stats, { StatsObject } from 'src/components/Stats/Stats';
import { MatchObject } from 'src/components/Match/Match';
import styles from './Details.module.scss';

export interface DetailsObject {
  snapshot: LadderObject[];
  stats: StatsObject;
  history: MatchObject[];
}

interface DetailsProps {
  visible?: boolean;
  data: DetailsObject;
}

const cx = classnames.bind(styles);

const Details = ({ visible, data }: DetailsProps) => (
  <div className={cx('Details', { visible })}>
    <Tabs
      selectedTabClassName={cx('TabSelected')}
      selectedTabPanelClassName={cx('TabPanelSelected')}
    >
      <TabList className={cx('TabList')}>
        <Tab className={cx('Tab')}>Snapshot</Tab>
        <Tab className={cx('Tab')}>Stats</Tab>
        <Tab className={cx('Tab')}>History</Tab>
      </TabList>

      <TabPanel className={cx('TabPanel')}>
        <Snapshot data={data.snapshot} />
      </TabPanel>

      <TabPanel className={cx('TabPanel')}>
        <Stats data={data.stats} />
      </TabPanel>

      <TabPanel className={cx('TabPanel')}>
        <History data={data.history} />
      </TabPanel>
    </Tabs>
  </div>
)

export default Details;
