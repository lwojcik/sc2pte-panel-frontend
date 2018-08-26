import React from 'react';
import PropTypes from 'prop-types';

import './LadderMode.css';

const LadderMode = ({ mode }) => (
  <span className="LadderMode">
    {mode}
    :
  </span>
);

LadderMode.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default LadderMode;
