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

const validate = (value) => {
  const valueIsEmpty = !value;
  const valueIsValid = validateProfileUrl(value);

  if (valueIsEmpty) {
    return Phrases.en.config.validation.urlCannotBeEmpty;
  }
  if (valueIsValid === false) {
    return Phrases.en.config.validation.urlLooksInvalid;
  }
  return null;
};

// const validateSelect = (value) => {
//   return !value ? Phrases.en.config.validation.selectServer : null;
// };

/* eslint-enable arrow-body-style */

const cx = errorObject => classnames('form-control', errorObject ? 'is-invalid' : '');

const ConfigForm = ({
  phrases, // eslint-disable-line
  onSubmit,
  submissionDisabled,
  profileUrl,
  // server,
  // playerid,
  // region,
  // name,
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
            validate={validate}
          />
          <ConfigFormError>
            {formState.errors.profileUrl}
          </ConfigFormError>
        </ConfigFormGroup>
        {/* <ConfigFormGroup>
          <ConfigFormLabel text={phrases.fields.server.label} />
          <Select
            value={server}
            field="server"
            id="server"
            className={cx(formState.errors.server)}
            validateOnBlur
            validateOnChange
            validate={validateSelect}
          >
            <Option value="" disabled>
              {phrases.fields.server.choose}
            </Option>
            <Option value="eu">
              {phrases.fields.server.eu}
            </Option>
            <Option value="us">
              {phrases.fields.server.us}
            </Option>
            <Option value="kr">
              {phrases.fields.server.kr}
            </Option>
          </Select>
          <ConfigFormError>
            {formState.errors.server}
          </ConfigFormError>
        </ConfigFormGroup>
        <ConfigFormGroup>
          <ConfigFormLabel text={phrases.fields.playerid.label} />
          <Text
            placeholder={playerid}
            className={cx(formState.errors.playerid)}
            field="playerid"
            id="playerid"
            validateOnBlur
            validateOnChange
            validate={validate}
          />
          <ConfigFormError>
            {formState.errors.playerid}
          </ConfigFormError>
        </ConfigFormGroup>
        <ConfigFormGroup>
          <ConfigFormLabel text={phrases.fields.region.label} />
          <Text
            placeholder={region}
            className={cx(formState.errors.region)}
            field="region"
            id="region"
            validateOnBlur
            validateOnChange
            validate={validate}
          />
          <ConfigFormError>
            {formState.errors.region}
          </ConfigFormError>
        </ConfigFormGroup>
        <ConfigFormGroup>
          <ConfigFormLabel text={phrases.fields.name.label} />
          <Text
            placeholder={name}
            className={cx(formState.errors.name)}
            field="name"
            id="name"
            validateOnBlur
            validateOnChange
            validate={validate}
          />
          <ConfigFormError>
            {formState.errors.name}
          </ConfigFormError>
        </ConfigFormGroup> */}
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
  // server: PropTypes.string,
  // playerid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // region: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // name: PropTypes.string,
};

ConfigForm.defaultProps = {
  submissionDisabled: true,
  profileUrl: '',
  // server: '',
  // playerid: '',
  // region: '',
  // name: '',
};

export default ConfigForm;
