import React, { useState } from 'react';
import classnames from 'classnames/bind';
import GenericButton from 'components/GenericButton/GenericButton';
import styles from './RefreshPageButton.module.scss';

const cx = classnames.bind(styles);

const RefreshPageButton = () => {
  const [disabled, setDisabled] = useState(false);

  const reload = () => {
    setDisabled(true);
    window.location.reload(true);
  };

  return (
    <GenericButton
      className={cx('RefreshPageButton')}
      disabled={disabled}
      onClick={reload}
    >
      Refresh page?
    </GenericButton>
  );
};

export default RefreshPageButton;
