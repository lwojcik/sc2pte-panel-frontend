import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ConfigWrapper.css';

const ConfigWrapper = ({ children }) => (
  <div className="ConfigWrapper">
    <Container fluid>
      {React.Children.map(children, child => (
        <Row>
          <Col>
            {child}
          </Col>
        </Row>
      ))}
    </Container>
  </div>
);

ConfigWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
    ])),
  ]),
};

ConfigWrapper.defaultProps = {
  children: [],
};


export default ConfigWrapper;
