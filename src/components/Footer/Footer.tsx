import React from 'react';
import classnames from 'classnames/bind';
import FooterLink from 'components/FooterLink/FooterLink';
import FooterCreators from 'components/FooterCreators/FooterCreators';
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

const Footer = () => (
  <div className={cx('Footer')}>
    <FooterLink />
    <FooterCreators />
  </div>
);

export default Footer;
