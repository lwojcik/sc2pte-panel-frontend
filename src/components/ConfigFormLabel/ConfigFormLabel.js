import React from 'react';
import PropTypes from 'prop-types';

import { Label } from 'reactstrap';

const ConfigFormLabel = ({ text }) => (
  <Label for={text.toLowerCase()} sm={12} md={12}>
    {text}
    {':'}
  </Label>
);

ConfigFormLabel.propTypes = {
  text: PropTypes.string,
};

ConfigFormLabel.defaultProps = {
  text: 'label',
};

export default ConfigFormLabel;
