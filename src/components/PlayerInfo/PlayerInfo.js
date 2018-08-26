import React from 'react';
import PropTypes from 'prop-types';

import ClanTag from '../ClanTag/ClanTag';
import PlayerName from '../PlayerName/PlayerName';
import ClanName from '../ClanName/ClanName';

import './PlayerInfo.css';

const PlayerInfo = ({ name, clan }) => (
  <div className="PlayerInfo">
    <ClanTag tag={clan.tag} />
    {' '}
    <PlayerName name={name} />
    <ClanName name={clan.name} />
  </div>
);

PlayerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  clan: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
  }),
};

PlayerInfo.defaultProps = {
  clan: {
    name: '',
    tag: '',
  },
};

export default PlayerInfo;
