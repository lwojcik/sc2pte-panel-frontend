import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { ClipLoader } from 'react-spinners';

const StatusMessage = ({ type, content, throbberVisible }) => (
  <Alert color={type}>
    <ClipLoader
      size={13}
      color="#0c5460"
      loading={throbberVisible}
    />
    {' '}
    {content}
  </Alert>
);

StatusMessage.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  throbberVisible: PropTypes.bool,
};

StatusMessage.defaultProps = {
  type: 'info',
  content: 'Loading extension data...',
  throbberVisible: true,
};

export default StatusMessage;
