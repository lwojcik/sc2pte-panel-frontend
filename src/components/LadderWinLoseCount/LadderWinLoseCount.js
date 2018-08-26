import React from 'react';
import PropTypes from 'prop-types';

import './LadderWinLoseCount.css';


const LadderWinLoseCount = ({ wins, ties, losses }) => {
  if (wins !== 0 || ties !== 0 || losses !== 0) {
    return (
      <span className="LadderWinLoseCount">
        <span className="countWins" title="Wins">
          {(wins < 10 ? `0${wins}` : wins)}
        </span>
        <span className="separator">
          &nbsp;/&nbsp;
        </span>
        <span className="countTies" title="Draws">
          {(ties < 10 ? `0${ties}` : ties)}
        </span>
        <span className="separator">
          &nbsp;/&nbsp;
        </span>
        <span className="countLosses" title="Losses">
          {(losses < 10 ? `0${losses}` : losses)}
        </span>
      </span>
    );
  }
  return (
    <span className="LadderWinLoseCount">
      <span className="noGames">
        00 / 00 / 00
      </span>
    </span>
  );
};

LadderWinLoseCount.propTypes = {
  wins: PropTypes.number,
  ties: PropTypes.number,
  losses: PropTypes.number,

};

LadderWinLoseCount.defaultProps = {
  wins: 0,
  ties: 0,
  losses: 0,
};

export default LadderWinLoseCount;
