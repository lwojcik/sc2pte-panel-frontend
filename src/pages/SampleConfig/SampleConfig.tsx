import React from 'react';
import ConfigFormPanel from 'src/components/ConfigFormPanel/ConfigFormPanel';

const data = {
  profiles: [
    'https://starcraft2.com/en-us/profile/2/1/5415782337',
    'https://starcraft2.com/en-us/profile/2/1/541578337',
  ],
  maxProfiles: 3,
};

const maxProfiles = 3;

const configSubmitFunction = () => {
  alert('Data submitted! Haha, except not Kappa');
};

const validationSchema = () => true;

const Sample = () => (
  <ConfigFormPanel
    initialValues={data}
    onSubmit={configSubmitFunction as any}
    validationSchema={validationSchema as any}
    maxProfiles={maxProfiles}
  />
);

export default Sample;
