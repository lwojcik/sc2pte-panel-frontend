import React from 'react';
import classnames from 'classnames/bind';
import styles from './ClanTag.module.scss';

interface ClanTagProps {
  tag?: string;
}

const cx = classnames.bind(styles);

const ClanTag = ({ tag }: ClanTagProps) =>
  tag && tag.length > 0
    ? (
      <span className={cx('ClanTag')}>
        [{tag}]
      </span>
    )
    : null;

export default ClanTag;
