import React from 'react';
import PropTypes from 'prop-types';

import Ladder from '../Ladder/Ladder';

import './LadderDataContainer.css';

const LadderDataContainer = ({ data }) => (
  <div className="LadderDataContainer">
    <Ladder mode="1v1" data={data['1v1']} />
    <Ladder mode="archon" data={data.archon} />
    <Ladder mode="2v2" data={data['2v2']} />
    <Ladder mode="3v3" data={data['3v3']} />
    <Ladder mode="4v4" data={data['4v4']} />
  </div>
);

LadderDataContainer.propTypes = {
  data: PropTypes.shape({
    '1v1': PropTypes.shape({
      totalLadders: PropTypes.number,
      topRankId: PropTypes.number,
      topRank: PropTypes.string,
      topMMR: PropTypes.number,
      wins: PropTypes.number,
      losses: PropTypes.number,
      ties: PropTypes.number,
    }),
    archon: PropTypes.shape({
      totalLadders: PropTypes.number,
      topRankId: PropTypes.number,
      topRank: PropTypes.string,
      topMMR: PropTypes.number,
      wins: PropTypes.number,
      losses: PropTypes.number,
      ties: PropTypes.number,
    }),
    '2v2': PropTypes.shape({
      totalLadders: PropTypes.number,
      topRankId: PropTypes.number,
      topRank: PropTypes.string,
      topMMR: PropTypes.number,
      wins: PropTypes.number,
      losses: PropTypes.number,
      ties: PropTypes.number,
    }),
    '3v3': PropTypes.shape({
      totalLadders: PropTypes.number,
      topRankId: PropTypes.number,
      topRank: PropTypes.string,
      topMMR: PropTypes.number,
      wins: PropTypes.number,
      losses: PropTypes.number,
      ties: PropTypes.number,
    }),
    '4v4': PropTypes.shape({
      totalLadders: PropTypes.number,
      topRankId: PropTypes.number,
      topRank: PropTypes.string,
      topMMR: PropTypes.number,
      wins: PropTypes.number,
      losses: PropTypes.number,
      ties: PropTypes.number,
    }),
  }),
};

LadderDataContainer.defaultProps = {
  data: {
    '1v1': {
      totalLadders: 0,
      topRankId: -1,
      topRank: '',
      topMMR: 0,
      wins: 0,
      losses: 0,
      ties: 0,
    },
    archon: {
      totalLadders: 0,
      topRankId: -1,
      topRank: '',
      topMMR: 0,
      wins: 0,
      losses: 0,
      ties: 0,
    },
    '2v2': {
      totalLadders: 0,
      topRankId: -1,
      topRank: '',
      topMMR: 0,
      wins: 0,
      losses: 0,
      ties: 0,
    },
    '3v3': {
      totalLadders: 0,
      topRankId: -1,
      topRank: '',
      topMMR: 0,
      wins: 0,
      losses: 0,
      ties: 0,
    },
    '4v4': {
      totalLadders: 0,
      topRankId: -1,
      topRank: '',
      topMMR: 0,
      wins: 0,
      losses: 0,
      ties: 0,
    },
  },
};

export default LadderDataContainer;
