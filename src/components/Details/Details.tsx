import React from 'react';
import classnames from 'classnames/bind';
import TabSection from 'src/components/TabSection/TabSection';
import TabSectionElement from 'src/components/TabSectionElement/TabSectionElement';
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
    <TabSection>
      <TabSectionElement name='Snapshot'>
        <Snapshot data={data.snapshot} />
      </TabSectionElement>
      <TabSectionElement name='Stats'>
        <Stats data={data.stats} />
      </TabSectionElement>
      <TabSectionElement name='History'>
        <History data={data.history} />
      </TabSectionElement>
    </TabSection>
  </div>
)

export default Details;
