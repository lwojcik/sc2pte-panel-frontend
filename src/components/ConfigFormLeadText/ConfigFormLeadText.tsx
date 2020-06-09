import React from 'react';
import classnames from 'classnames/bind';
import styles from './ConfigFormLeadText.module.scss';

const cx = classnames.bind(styles);

const ConfigFormLeadText = () => (
  <div className={cx('ConfigFormLeadText')}>
    <p>Use the form below to add links to StarCraft II profiles you want to showcase.<br/>
      Drag and drop profile fields to change their order.<br/>
      You can add up to 3 profiles from any StarCraft II region.</p>
  </div>
);

export default ConfigFormLeadText;
