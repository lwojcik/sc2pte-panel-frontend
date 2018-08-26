import React from 'react';
import { ScaleLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import './LoadingPrompt.css';

const LoadingPrompt = ({ message }) => (
  <div className="LoadingPrompt">
    <ScaleLoader
      className="spinner"
      height={50}
      width={8}
      margin="4px"
      radius={2}
      color="#C1FFFF"
      loading
    />
    <p>
      {message}
    </p>
  </div>
);

LoadingPrompt.propTypes = {
  message: PropTypes.string.isRequired,
};

export default LoadingPrompt;
