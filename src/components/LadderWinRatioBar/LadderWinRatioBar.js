import React from 'react';
import PropTypes from 'prop-types';

import './LadderWinRatioBar.css';

const checkIfZero = number => Number.isNaN(number) || number === 0;

const calculatePercentage = (number, total) => {
  const fraction = number / total;
  return checkIfZero(fraction) ? 0 : Math.round(fraction * 100);
};

const LadderWinRatioBar = ({ wins, losses }) => {
  const gamesOverall = wins + losses; // + ties;

  const winsPercentage = checkIfZero(wins) ? 0 : calculatePercentage(wins, gamesOverall);
  // const tiesPercentage = checkIfZero(ties) ? 0 : calculatePercentage(ties, gamesOverall);
  const lossesPercentage = checkIfZero(losses) ? 0 : 100 - winsPercentage; // - tiesPercentage

  const BarWinsStyle = {
    width: `${winsPercentage}%`,
  };

  // const BarTiesStyle = {
  //   width: `${tiesPercentage}%`,
  // };

  const BarLossesStyle = {
    width: `${lossesPercentage}%`,
  };

  return (
    <div className="LadderWinRatioBar">
      <div className="bar-overall">
        <div className="bar bar-wins" style={BarWinsStyle} />
        {/* <div className="bar bar-ties" style={BarTiesStyle} /> */}
        <div className="bar bar-losses" style={BarLossesStyle} />
      </div>
    </div>
  );
};

LadderWinRatioBar.propTypes = {
  wins: PropTypes.number,
  // ties: PropTypes.number,
  losses: PropTypes.number,

};

LadderWinRatioBar.defaultProps = {
  wins: 0,
  // ties: 0,
  losses: 0,
};

export default LadderWinRatioBar;
