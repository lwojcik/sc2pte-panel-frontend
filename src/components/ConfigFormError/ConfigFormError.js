import React from 'react';
import PropTypes from 'prop-types';

const ConfigFormError = ({ children }) => (
  <p className="text-danger col-form-label">
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
