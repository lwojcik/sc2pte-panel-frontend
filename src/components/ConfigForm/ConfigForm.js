import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import {
  Form,
  Text,
  // Select,
  // Option,
} from 'informed';

import Phrases from '../../constants/phrases';

import ConfigFormGroup from '../ConfigFormGroup/ConfigFormGroup';
import ConfigFormLabel from '../ConfigFormLabel/ConfigFormLabel';
import ConfigFormError from '../ConfigFormError/ConfigFormError';
import ConfigFormSubmitWrapper from '../ConfigFormSubmitWrapper/ConfigFormSubmitWrapper';

import { validateProfileUrl } from '../../helpers/config';

import './ConfigForm.css';


/* eslint-disable arrow-body-style */

const validateFieldNotEmpty = (value) => {
  return (value === '') ? Phrases.en.config.validation.fieldCannotBeEmpty : null;
};

const validateBnetProfileUrl = (value) => {
  console.log('validateBnetProfileUrl'); // eslint-disable-line
  console.log(validateProfileUrl(value)); // eslint-disable-line
  return validateProfileUrl(value) === true ? Phrases.en.config.validation.urlLooksInvalid : null;
};

const validate = (value) => {
  return validateFieldNotEmpty(value) || validateBnetProfileUrl(value);
};

/* eslint-enable arrow-body-style */

const cx = errorObject => classnames('form-control', errorObject ? 'is-invalid' : '');

const ConfigForm = ({
  phrases, // eslint-disable-line
  onSubmit,
  submissionDisabled,
  profileUrl,
}) => (
  <Form className="ConfigForm" id="ConfigForm" onSubmit={onSubmit}>
    {({ formState }) => (
      <React.Fragment>
        <ConfigFormGroup>
          <ConfigFormLabel text={phrases.fields.profileUrl.label} fieldName="profileUrl" />
          <Text
            placeholder={profileUrl}
            className={cx(formState.errors.profileUrl)}
            field="profileUrl"
            id="profileUrl"
            validate={validate}
          />
          <ConfigFormError>
            {formState.errors.profileUrl}
          </ConfigFormError>
        </ConfigFormGroup>
        <ConfigFormSubmitWrapper>
          <Button color="primary" disabled={submissionDisabled || formState.invalid || formState.pristine}>
            {phrases.fields.submit.label}
          </Button>
        </ConfigFormSubmitWrapper>
      </React.Fragment>
    )}
  </Form>
);

ConfigForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submissionDisabled: PropTypes.bool,
  profileUrl: PropTypes.string,
};

ConfigForm.defaultProps = {
  submissionDisabled: true,
  profileUrl: '',
};

export default ConfigForm;
