import React from 'react';
import classnames from 'classnames/bind';
import ConfigFormHeading from 'components/ConfigFormHeading/ConfigFormHeading';
import ConfigFormWrapper from 'components/ConfigFormWrapper/ConfigFormWrapper';
import ConfigBackground from 'components/ConfigBackground/ConfigBackground';
import Footer from 'components/Footer/Footer';
import ConfigServerError from 'components/ConfigServerError/ConfigServerError';
import styles from './ConfigConnectionError.module.scss';

const cx = classnames.bind(styles);

const ConfigConnectionError = () => (
  <div className={cx('ConfigConnectionError')}>
    <ConfigBackground />
    <ConfigFormWrapper>
      <div>
        <ConfigFormHeading />
        <ConfigServerError />
      </div>
      <></>
    </ConfigFormWrapper>
    <Footer />
  </div>
);

export default ConfigConnectionError;
