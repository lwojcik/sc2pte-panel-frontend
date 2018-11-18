import React from 'react';
import PropTypes from 'prop-types';

import Frame from '../Frame/Frame';
import Portrait from '../Portrait/Portrait';
import Flag from '../Flag/Flag';

import './Avatar.css';

const Avatar = ({ rank, portrait, server }) => (
  <div className="Avatar">
    <Frame rank={rank}>
      <Portrait url={portrait} />
    </Frame>
    <Flag server={server} />
  </div>
);

Avatar.propTypes = {
  rank: PropTypes.string,
  portrait: PropTypes.string,
  server: PropTypes.oneOf(['', 'eu', 'us', 'kr']),
};

Avatar.defaultProps = {
  rank: 'default',
  portrait: '',
  server: '',
};

export default Avatar;
