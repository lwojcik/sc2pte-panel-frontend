import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

import './PlayerHeader.css';

const PlayerHeader = ({ data }) => (
  <div className="PlayerHeader">
    <Avatar rank={data.rank} portrait={data.portrait} server={data.server} />
    <PlayerInfo name={data.name} clan={data.clan} />
  </div>
);

PlayerHeader.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    clan: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    }),
    server: PropTypes.oneOf(['', 'eu', 'us', 'kr']).isRequired,
    rank: PropTypes.string,
    portrait: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayerHeader;
