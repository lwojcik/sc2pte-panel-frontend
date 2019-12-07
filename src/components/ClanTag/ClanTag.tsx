import React from 'react';
import styles from './ClanTag.module.scss';

interface ClanTagProps {
  tag?: string;
}

const ClanTag = ({ tag }: ClanTagProps) => {
  return tag && tag.length > 0
    ? (
      <span className={styles.ClanTag}>
        [{tag}]
      </span>
    )
    : null;
}

export default ClanTag;