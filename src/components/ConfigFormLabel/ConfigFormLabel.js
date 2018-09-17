import React from 'react';
import PropTypes from 'prop-types';

import { Label } from 'reactstrap';

const ConfigFormLabel = ({ text, fieldName }) => (
  <Label for={fieldName}>
    {text}
    {':'}
  </Label>
);

ConfigFormLabel.propTypes = {
  fieldName: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ConfigFormLabel.defaultProps = {
  text: 'label',
};

export default ConfigFormLabel;
