import React from 'react';
import PropTypes from 'prop-types';

import './ConfigFormError.css';

const ConfigFormError = ({ children }) => (
  <p className="text-danger col-form-label ConfigFormError">
    {children}
  </p>
);

ConfigFormError.propTypes = {
  children: PropTypes.string,
};

ConfigFormError.defaultProps = {
  children: '',
};

export default ConfigFormError;
