import React from 'react';
import PropTypes from 'prop-types';

import './PlayerName.css';

const PlayerName = ({ name }) => (
  <span className="PlayerName">
    {name}
  </span>
);

PlayerName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PlayerName;
