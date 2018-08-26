import React from 'react';
import PropTypes from 'prop-types';

import './ClanTag.css';

const ClanTag = ({ tag }) => {
  if (tag !== '') {
    return (
      <span className="ClanTag">
        [
        {tag}
        ]
      </span>
    );
  }
  return '';
};

ClanTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default ClanTag;
