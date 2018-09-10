import React from 'react';
import PropTypes from 'prop-types';

import {
  // Col,
  FormGroup,
} from 'reactstrap';


const ConfigFormSubmitWrapper = ({ children }) => (
  <FormGroup check row>
    {children}
  </FormGroup>
);

ConfigFormSubmitWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
    ])),
  ]),
};

ConfigFormSubmitWrapper.defaultProps = {
  children: [],
};

export default ConfigFormSubmitWrapper;
