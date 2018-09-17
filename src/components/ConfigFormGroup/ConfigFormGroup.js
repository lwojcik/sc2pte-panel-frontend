import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import {
  Col,
  FormGroup,
} from 'reactstrap';

const ConfigFormGroup = ({ children }) => (
  <FormGroup row>
    <Col sm={12}>
      {children[0]}
    </Col>
    <Col sm={12}>
      {children[1]}
    </Col>
    <Col sm={12}>
      {children[2]}
    </Col>
  </FormGroup>
);

ConfigFormGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ])),
};

ConfigFormGroup.defaultProps = {
  children: [],
};

export default ConfigFormGroup;
