import React from 'react';
import PropTypes from 'prop-types';

import './LadderTopMMR.css';

const LadderTopMMR = ({ mmr }) => {
  const text = mmr !== 0 ? `MMR ${mmr}` : '';

  return (
    <div className="LadderTopMMR">
      {text}
    </div>
  );
};

LadderTopMMR.propTypes = {
  mmr: PropTypes.number,
};

LadderTopMMR.defaultProps = {
  mmr: 0,
};

export default LadderTopMMR;
