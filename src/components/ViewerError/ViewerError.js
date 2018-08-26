import React from 'react';
import PropTypes from 'prop-types';

import './ViewerError.css';

const ViewerError = ({ emote, message }) => (
  <div className="ViewerError">
    <p className="ViewerError__emote">
      {emote}
    </p>
    <p className="ViewerError__message">
      {message}
    </p>
  </div>
);

ViewerError.propTypes = {
  emote: PropTypes.string,
  message: PropTypes.string,
};

ViewerError.defaultProps = {
  emote: 'ಠ_ಠ',
  message: 'Unspecified error!',
};

export default ViewerError;
