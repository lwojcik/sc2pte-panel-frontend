import React from 'react';
import PropTypes from 'prop-types';

import './ClanName.css';

const ClanName = ({ name }) => (
  <div className="ClanName">
    {name}
  </div>
);

ClanName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClanName;
