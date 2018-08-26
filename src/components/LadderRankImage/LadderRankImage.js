import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './LadderRankImage.css';

const LadderRankImage = ({ rank }) => {
  const rankImageClass = classNames('LadderRankImage', rank.toLowerCase());

  return (
    <div className={rankImageClass} />
  );
};

LadderRankImage.propTypes = {
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

LadderRankImage.defaultProps = {
  rank: 'none',
};


export default LadderRankImage;
