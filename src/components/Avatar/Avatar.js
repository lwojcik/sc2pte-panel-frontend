import React from 'react';
import PropTypes from 'prop-types';

import Frame from '../Frame/Frame';
import Portrait from '../Portrait/Portrait';
import Flag from '../Flag/Flag';

import './Avatar.css';

const Avatar = ({ rank, portrait, server }) => (
  <div className="Avatar">
    <Frame rank={rank}>
      <Portrait source={portrait} />
    </Frame>
    <Flag server={server} />
  </div>
);

Avatar.propTypes = {
  rank: PropTypes.string,
  portrait: PropTypes.shape({
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    url: PropTypes.string,
  }),
  server: PropTypes.oneOf(['', 'eu', 'us', 'kr']),
};

Avatar.defaultProps = {
  rank: 'default',
  portrait: {
    x: '0',
    y: '0',
    w: '90',
    h: '90',
    offset: 0,
    url: '',
  },
  server: '',
};

export default Avatar;
