import React from 'react';
import PropTypes from 'prop-types';

import DefaultPortrait from './images/Portrait-default.png';

/** Until Blizzard portraits aren't served over HTTPS I have to do this nonsense
 * 2018.10.17 - portraits are served over HTTPS from https://static.starcraft2.com/starport/portraits/,
 * but I can't map filenames yet
 */
// const getLocalPortraitCopy = (source) => {
//   const fileName = source.split('/').slice(-1)[0];
//   return require(`./images/${fileName}`);
// };

const Portrait = ({ url }) => {
  const PortraitImage = url || DefaultPortrait;

  const PortraitStyle = {
    width: 64,
    height: 64,
    backgroundImage: `url(${PortraitImage})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="Portrait" style={PortraitStyle} />
  );
};

Portrait.propTypes = {
  url: PropTypes.string,
};

Portrait.defaultProps = {
  url: DefaultPortrait,
};

export default Portrait;
