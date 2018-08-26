import React from 'react';

import PlayerHeader from '../PlayerHeader/PlayerHeader';
import LadderData from '../LadderData/LadderData';

import './ViewerPanel.css';

/* eslint-disable react/prop-types */

const ViewerPanel = ({ playerData, ladderData }) => (
  <div className="ViewerPanel">
    <PlayerHeader data={playerData} />
    <LadderData data={ladderData} />
  </div>
);

/* eslint-enable react/prop-types */

export default ViewerPanel;
