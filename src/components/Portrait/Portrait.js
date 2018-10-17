import React from 'react';
import PropTypes from 'prop-types';

import DefaultPortrait from './images/Portrait-default.png';

/** Until Blizzard portraits aren't served over HTTPS I have to do this nonsense
 * 2018.10.17 - portraits are served over HTTPS from https://static.starcraft2.com/starport/portraits/,
 * but I can't map filenames yet
 */
const getLocalPortraitCopy = (source) => {
  const fileName = source.split('/').slice(-1)[0];
  return require(`./images/${fileName}`); // eslint-disable-line global-require, import/no-dynamic-require
};

const Portrait = ({ source }) => {
  const PortraitImage = source.url ? getLocalPortraitCopy(source.url) : DefaultPortrait;

  const PortraitStyle = {
    width: source.w === '' ? 90 : source.w,
    height: source.h === '' ? 90 : source.h,
    backgroundPositionX: source.x === '' ? 0 : source.x,
    backgroundPositionY: source.y === '' ? 0 : source.y,
    backgroundImage: `url(${PortraitImage})`,
    position: 'relative',
    top: '-22%',
    left: '-22%',
  };

  return (
    <div className="Portrait" style={PortraitStyle} />
  );
};

Portrait.propTypes = {
  source: PropTypes.shape({
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    url: PropTypes.string,
  }),
};

Portrait.defaultProps = {
  source: {
    x: 0,
    y: 0,
    w: 90,
    h: 90,
    offset: 0,
    url: DefaultPortrait,
  },
};

export default Portrait;
