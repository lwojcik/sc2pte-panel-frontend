import React from 'react';
import classnames from 'classnames/bind';
import homepage from './images/homepage.png';
import styles from './FooterLink.module.scss';

const cx = classnames.bind(styles);

const FooterLink = () => (
  <div className={cx('FooterLink')}>
    <a
      href='https://www.sc2pte.eu/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src={homepage}
        alt=''
      />
      About / contact
    </a>
  </div>
);

export default FooterLink;
