import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Portrait from '../Portrait/Portrait';

import './Frame.css';

const Frame = ({ rank, children }) => {
  const FrameImageClassName = classNames('FrameImage', rank.toLowerCase());

  return (
    <div className="Frame">
      <div className={FrameImageClassName} />
      <div className="Content">
        {children}
      </div>
    </div>
  );
};

Frame.propTypes = {
  rank: PropTypes.string,
  children: PropTypes.element,
};

Frame.defaultProps = {
  rank: 'default',
  children: <Portrait />,
};

export default Frame;
