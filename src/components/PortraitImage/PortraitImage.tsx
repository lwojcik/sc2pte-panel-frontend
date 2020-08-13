import React from 'react';
import classnames from 'classnames/bind';
import styles from './PortraitImage.module.scss';

interface PortraitImageProps {
  url: string;
}

const cx = classnames.bind(styles);

const PortraitImage = ({ url }: PortraitImageProps) => (
  <img
    className={cx('PortraitFrame')}
    src={url}
    alt=''
  />
);

export default PortraitImage;
