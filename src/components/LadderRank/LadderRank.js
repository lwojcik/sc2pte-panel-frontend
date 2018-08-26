import React from 'react';
import PropTypes from 'prop-types';

import './LadderRank.css';

const LadderRank = ({ rank }) => (
  <div className="LadderRank">
    {rank}
  </div>
);

LadderRank.propTypes = {
  rank: PropTypes.oneOf([
    '',
    'none',
    'bronze',
    'silver',
    'gold',
    'platinum',
    'diamond',
    'master',
    'grandmaster',
    'NONE',
    'BRONZE',
    'SILVER',
    'GOLD',
    'PLATINUM',
    'DIAMOND',
    'MASTER',
    'GRANDMASTER',
  ]),
};

LadderRank.defaultProps = {
  rank: 'none',
};

export default LadderRank;
