import React from 'react';
import classnames from 'classnames/bind';
import homepage from './images/homepage.png';
import styles from './FooterLink.module.scss';

const cx = classnames.bind(styles);

const FooterLink = () => (
  <div className={cx('FooterLink')}>
    <a
      href='https://sc2pte.lukem.net/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src={homepage}
        alt=''
      />
      Project homepage
    </a>
  </div>
);

export default FooterLink;
