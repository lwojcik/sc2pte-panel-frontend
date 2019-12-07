import React, { useState } from 'react';
import GenericButton from 'src/components/GenericButton/GenericButton';
import styles from './RefreshPageButton.module.scss';

const RefreshPageButton = () => {
  const [disabled, setDisabled] = useState(false);

  const reload = () => {
    setDisabled(true);
    window.location.reload(true);
  }

  return (
    <GenericButton
      className={styles.RefreshPageButton}
      disabled={disabled}
      onClick={reload}
    >
      Refresh page?
    </GenericButton>
  );
}

export default RefreshPageButton;