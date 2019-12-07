import React from 'react';
import styles from './PortraitImage.module.scss';

interface PortraitImageProps {
  url: string;
}

const PortraitImage = ({ url }: PortraitImageProps) => (
  <img className={styles.PortraitFrame} src={url} alt="" />
);

export default PortraitImage;