import React from 'react';
import classnames from 'classnames/bind';
import PortraitImage from 'components/PortraitImage/PortraitImage';
import PortraitFrame from 'components/PortraitFrame/PortraitFrame';
import { PortraitObject } from 'types';
import styles from './Portrait.module.scss';

interface PortraitProps {
  portrait: PortraitObject;
}

const cx = classnames.bind(styles);

const Portrait = ({ portrait }: PortraitProps) => {
  const { frame, url } = portrait;

  return (
    <div className={cx('Portrait')}>
      <PortraitFrame rank={frame}>
        <PortraitImage url={url} />
      </PortraitFrame>
    </div>
  );
};

export default Portrait;
