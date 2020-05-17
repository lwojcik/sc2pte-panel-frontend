import React from 'react';
import classnames from 'classnames/bind';
import styles from './Footer.module.scss';
import image1 from './images/1.png';
import image2 from './images/2.png';

const cx = classnames.bind(styles);

const Footer = () => (
  <div className={cx('Footer')}>
    <div><a href='#email'>support@lukem.net</a></div>
    <div>
      <a href='#test1'>
        <img
          alt=''
          src={image1}
        />
      </a>
      <a href='#test2'>
        <img
          alt=''
          src={image2}
        />
      </a>
    </div>
  </div>
);

export default Footer;
