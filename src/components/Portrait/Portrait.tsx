import React from 'react';
import { Rank } from 'src/components/RankImage/RankImage';
import PortraitImage from 'src/components/PortraitImage/PortraitImage';
import PortraitFrame from 'src/components/PortraitFrame/PortraitFrame';
import styles from './Portrait.module.scss';

export interface PortraitObject {
  url: string;
  frame: Rank;
}

interface PortraitProps {
  portrait: PortraitObject;
}

const Portrait = ({ portrait }: PortraitProps) => (
  <div className={styles.Portrait}>
    <PortraitFrame rank={portrait.frame}>
      <PortraitImage url={portrait.url} />
    </PortraitFrame>
  </div>
);

export default Portrait;
