import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import {
  Form,
  Text,
} from 'informed';

import Phrases from '../../constants/phrases';

import ConfigFormGroup from '../ConfigFormGroup/ConfigFormGroup';
import ConfigFormLabel from '../ConfigFormLabel/ConfigFormLabel';
import ConfigFormError from '../ConfigFormError/ConfigFormError';
import ConfigFormSubmitWrapper from '../ConfigFormSubmitWrapper/ConfigFormSubmitWrapper';

import { validateNewProfileUrl, validateLegacyProfileUrl } from '../../helpers/config';

import './ConfigForm.css';


/* eslint-disable arrow-body-style */

const validateFieldLength = (value, number) => {
  return (!typeof value == null && value.length > number)
    ? Phrases.en.config.validation.valueTooLong
    : null;
};

const validateFieldNotEmpty = (value) => {
  return (!value && value == null)
    ? Phrases.en.config.validation.fieldCannotBeEmpty
    : null;
};

const validateNewBnetProfileUrl = (profileUrl) => {
  return !validateNewProfileUrl(profileUrl) === true
    ? Phrases.en.config.validation.urlLooksInvalid
    : null;
};

const validateLegacyBnetProfileUrl = (profileUrl) => {
  return !validateLegacyProfileUrl(profileUrl) === true
    ? Phrases.en.config.validation.urlLooksInvalid
    : null;
};

const validateProfileUrl = (value) => {
  return (validateFieldNotEmpty(value) || validateFieldLength(value, 80))
    && (validateLegacyBnetProfileUrl(value) || validateNewBnetProfileUrl(value));
};

// const validateLettersAndNumbers = (value) => {
//   return (!value && value.match(/^[A-z0-9]+$/g))
//     ? Phrases.en.config.validation.invalidCharacters
//     : null;
// };

const validatePlayerName = (value) => {
  const result = validateFieldNotEmpty(value)
    || validateFieldLength(value, 12);
  return result;
};

/* eslint-enable arrow-body-style */

const cx = errorObject => classnames('form-control', errorObject ? 'is-invalid' : '');

const ConfigForm = ({
  phrases, // eslint-disable-line react/prop-types
  onSubmit,
  submissionDisabled,
  profileUrl,
  playerName,
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
            validateOnBlur
            validateOnChange
            validate={validateProfileUrl}
            maxLength="80"
          />
          <ConfigFormError>
            {formState.errors.profileUrl}
          </ConfigFormError>
        </ConfigFormGroup>
        <ConfigFormGroup>
          <ConfigFormLabel text={phrases.fields.playerName.label} fieldName="playerName" />
          <Text
            placeholder={playerName}
            className={cx(formState.errors.playerName)}
            field="playerName"
            id="playerName"
            validateOnBlur
            validateOnChange
            validate={validatePlayerName}
            maxLength="12"
          />
          <ConfigFormError>
            {formState.errors.playerName}
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
  playerName: PropTypes.string,
};

ConfigForm.defaultProps = {
  submissionDisabled: true,
  profileUrl: '',
  playerName: '',
};

export default ConfigForm;
