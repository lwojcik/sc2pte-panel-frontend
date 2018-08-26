import React from 'react';
import PropTypes from 'prop-types';

import './LadderWinRatioBar.css';

const LadderWinRatioBar = ({ wins, ties, losses }) => {
  const gamesOverall = wins + ties + losses;

  const BarWinsStyle = {
    width: `${Math.round(Number.isNaN(wins / gamesOverall) ? 0 : (wins / gamesOverall) * 100)}%`,
  };

  const BarTiesStyle = {
    width: `${Math.round(Number.isNaN(ties / gamesOverall) ? 0 : (ties / gamesOverall) * 100)}%`,
  };

  const BarLossesStyle = {
    width: `${Math.round(Number.isNaN(losses / gamesOverall) ? 0 : (losses / gamesOverall) * 100)}%`,
  };

  return (
    <div className="LadderWinRatioBar">
      <div className="bar-overall">
        <div className="bar bar-wins" style={BarWinsStyle} />
        <div className="bar bar-ties" style={BarTiesStyle} />
        <div className="bar bar-losses" style={BarLossesStyle} />
      </div>
    </div>
  );
};

LadderWinRatioBar.propTypes = {
  wins: PropTypes.number,
  ties: PropTypes.number,
  losses: PropTypes.number,

};

LadderWinRatioBar.defaultProps = {
  wins: 0,
  ties: 0,
  losses: 0,
};

export default LadderWinRatioBar;
