import React from 'react';
import PropTypes from 'prop-types';

import Frame from '../Frame/Frame';
import Portrait from '../Portrait/Portrait';

import './Avatar.css';

const Avatar = ({ rank, portrait }) => (
  <div className="Avatar">
    <Frame rank={rank}>
      <Portrait source={portrait} />
    </Frame>
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
};

export default Avatar;
