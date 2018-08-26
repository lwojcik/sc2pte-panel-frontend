import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Flag.css';


const Flag = ({ server }) => {
  const FlagClassName = classnames('Flag', `Flag--${server}`);
  return (
    <div className={FlagClassName} title={`Showing SC2 profile from ${server} server`} />
  );
};

Flag.propTypes = {
  server: PropTypes.oneOf(['', 'eu', 'us', 'kr']),
};

Flag.defaultProps = {
  server: '',
};

export default Flag;
